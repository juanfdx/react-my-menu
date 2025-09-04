import './WishlistButton.css';
// INTERFACES
import type { Product } from '../../../modules/products/interfaces/product.interface';
// COMPONENTS
import { Icon } from '../Icon/Icon';


type WishlistButtonProps = {
  product: Product
  wishlist: Product[]
  handleWishlist: (product: Product) => void
}


export const WishlistButton = ({product, wishlist, handleWishlist}: WishlistButtonProps) => {
  
  return (
    <button className='wishlist-button' onClick={()=> handleWishlist(product)}>
      {wishlist.some((p) => p.id === product.id) ? (
          <Icon type='heart-filled' className='wishlist-button__heart-filled-icon' />
        ) : (
          <Icon type='heart-outline' className='wishlist-button__heart-outline-icon' />
      )}
    </button>
  )
}