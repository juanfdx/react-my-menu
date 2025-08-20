import './ProductModal.css';
import type { Product } from '../../interfaces/product.interface';
import { useEffect, useRef, useState } from 'react';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';
// COMPONENTS
import { ExitIcon } from '../../../../assets/images/svg/ExitIcon';
import { useNavigate } from 'react-router';
import { AllergenList } from '../AllergenList/AllergenList';
import { Icon } from '../../../../shared/components/Icon/Icon';
import { StarRating } from '../../../../shared/components/StarRating/StarRating';


type ProductModalProps = {
  product: Product
}

export const ProductModal = ({ product }: ProductModalProps) => {

  const myWishlist = useMenuStore((state) => state.menu.wishlist);
  const setMyWishlist = useMenuStore((state) => state.addToWishlist);
  const remove = useMenuStore((state) => state.removeFromWishlist);

  const myRatedProducts    = useMenuStore((state) => state.menu.ratedProducts);
  const setMyRatedProducts = useMenuStore((state) => state.setRatedProducts);
  const removeRatedProduct = useMenuStore((state) => state.removeRatedProduct);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState<boolean>(false);

  const timeoutRef = useRef<number | null>(null); // used to clear the timeout
  const navigate = useNavigate();


  useEffect(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current)  clearTimeout(timeoutRef.current);
    };
  }, []);


  // to see the effect of opacity we need to wait 300ms before navigates
  const handleToggleActive = () => {
    setIsActive(false);
    timeoutRef.current = setTimeout(() => navigate(-1), 300);
  };

  const handleMyWishlist = (productId: number) => {
    if (myWishlist.includes(productId)) {
      remove(productId);
      return
    }
    setMyWishlist(productId);
  };

  const handleMyRatedProducts = (productId: number, rating: number) => {
    const currentRating = myRatedProducts[productId];
    if (currentRating === rating) {
      removeRatedProduct(productId);
      return;
    }
    setMyRatedProducts(productId, rating);
  };



  return (
    <div 
      className={`product-modal ${isActive ? 'product-modal--active' : ''}`} 
      onClick={handleToggleActive}
    >
      <div 
        className={`product-modal__container ${isActive ? 'product-modal__container--active' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className='product-modal__image-wrapper'>
          <button 
            className='product-modal__exit-button' 
            onClick={handleToggleActive}
          >
            <ExitIcon className='product-modal__exit-icon' />
          </button>

          <img 
            className='product-modal__img' 
            src={product.image} 
            alt={product.name} 
          />

          {/* rating modal */}
          <div className={`product-modal__rating-modal ${isRatingModalOpen ? 'product-modal__rating-modal--active' : ''}`}>
            <h3 className='product-modal__rating-modal-title'>Rate this product</h3>
            <StarRating  
              productId={product.id} 
              currentRating={myRatedProducts?.[product.id] || 0} 
              onRate={handleMyRatedProducts}
            />
          </div>

          {/* score buttons */}
          <div className='product-modal__score-buttons-wrapper'>
            <button className='product-modal__score-button' onClick={() => setIsRatingModalOpen(!isRatingModalOpen)}>
              <Icon type='rate-star' className='product-modal__score-star-icon' />
            </button>
            <button 
              className='product-modal__heart-button' 
              onClick={() => handleMyWishlist(product.id)}
            >
              {myWishlist.includes(product.id) ? (
                  <Icon type='heart-filled' className='product-modal__score-heart-filled-icon' />
                ) : (
                  <Icon type='heart-outline' className='product-modal__score-heart-outline-icon' />
              )}
            </button>
          </div>
        </div>
        
        {/* product info */}
        <div className='product-modal__info'>
          <div className='product-modal__text-wrapper'>
            <h1 className='product-modal__title'>{capitalizeFirstLetter(product.name)}</h1>
            <p className='product-modal__description'>{capitalizeFirstLetter(product.description)}</p>
          </div>
            <p className='product-modal__price'>{product.price}€</p>
        </div>

        <AllergenList allergens={product.allergens} />
      </div>
    </div>
  )
}