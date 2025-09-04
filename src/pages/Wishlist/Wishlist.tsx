import './Wishlist.css';
import { Link } from 'react-router';
// STORE
import { useMenuStore } from '../../stores/useMenuStore';
// COMPONENTS
import { ProductsView } from '../../modules/products/components/ProductsView/ProductsView';



export const Wishlist = () => {

  const myWishlist = useMenuStore((state) => state.menu.wishlist);


  if (myWishlist.length === 0) {
    return (
      <div className='suggestions'>
        <div className='suggestions__container'>
          <h1 className='suggestions__title'>Your wishlist is empty.</h1>
          <Link className='suggestions__link' to='/'>
            Return to menu
          </Link>
        </div>
      </div>
    );
  };
  
  return (
    <ProductsView  products={myWishlist}/>
  )
}