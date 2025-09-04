import './ProductsList.css';
import { Link, useLocation } from 'react-router';
// INTERFACES
import type { Product } from '../../interfaces/product.interface';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';
import { getSelectedLanguage } from '../../../../shared/utils/languages-methods';
// COMPONENTS
import { WishlistButton } from '../../../../shared/components/WishlistButton/WishlistButton';



export const ProductsList = ({ products }: { products: Product[]}) => {

  const myLanguage         = useMenuStore((state) => state.menu.language);
  const myWishlist         = useMenuStore((state) => state.menu.wishlist);
  const setMyWishlist      = useMenuStore((state) => state.addToWishlist);
  const removeFromWishlist = useMenuStore((state) => state.removeFromWishlist);

  const language = getSelectedLanguage(myLanguage);

  const location = useLocation();
  // this used to add banner suggestions on product images L63
  const isSuggestions = location.pathname.startsWith('/suggestions');


  const handleMyWishlist = (product: Product) => {
    if (myWishlist.some((p) => p.id === product.id)) {
      removeFromWishlist(product.id);
      return
    }
    setMyWishlist(product);
  };



  return (
    <ul className='products-list'>

      {products?.map((product) => 
        <li key={product.id} className='products-list__item'>
          <div className='products-list__item-wrapper'>
            <Link 
              className='products-list__link' 
              to={
                isSuggestions ? 
                `/suggestions/${product.id}` :
                `/products/${product.category}/${product.id}`
              }
              state={{
                backgroundLocation: location,
                products, // ✅ pass full array here
              }}
            >
              <img className='products-list__img' src={product.thumbnail} alt={product.name} />
              {(product.suggested && isSuggestions) &&
                <div className='products__suggestion-banner'>{capitalizeFirstLetter(language.suggestion)}</div>
              }
            </Link>   
  
            <div className='products-list__info'>
              <h3 className='products-list__title'>{capitalizeFirstLetter(product.name)}</h3>
              <p className='products-list__description'>{capitalizeFirstLetter(product.description)}</p>
              <p className='products-list__price'>{product.price}€</p>
              <p className='products-list__taxes'>({capitalizeFirstLetter(language.taxInfo)})</p>
            </div>
          </div>
          
          {/* WISHLIST BUTTON */}
          {!isSuggestions && 
            <WishlistButton 
              product={product} 
              wishlist={myWishlist} 
              handleWishlist={handleMyWishlist} 
            />
          }

        </li>
      )}

    </ul>
  )
}