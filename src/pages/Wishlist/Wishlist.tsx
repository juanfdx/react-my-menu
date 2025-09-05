import './Wishlist.css';
// STORE
import { useMenuStore } from '../../stores/useMenuStore';
// COMPONENTS
import { ProductsView } from '../../modules/products/components/ProductsView/ProductsView';
import { NoItemsMessage } from '../../shared/components/NoItemsMessage/NoItemsMessage';



export const Wishlist = () => {

  const myWishlist = useMenuStore((state) => state.menu.wishlist);


  if (myWishlist.length === 0) {
    return (
      <NoItemsMessage type='wishlist' showHomeButton />
    );
  };
  

  return (
    <ProductsView  products={myWishlist}/>
  )
}