import './ProductsList.css';
import { Link, useLocation } from 'react-router';
// INTERFACES
import type { Product } from '../../interfaces/product.interface';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';



export const ProductsList = ({ products }: { products: Product[]}) => {

  const location = useLocation();
  // this used to add banner suggestions on product images L63
  const isSuggestions = location.pathname.startsWith('/suggestions');


  return (
    <ul className='products-list'>

      {products?.map((product) => 
        <li key={product.id} className='products-list__item'>
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
              <div className='products__suggestion-banner'>suggestion</div>
            }
          </Link>   

          <div className='products-list__info'>
            <h3 className='products-list__title'>{capitalizeFirstLetter(product.name)}</h3>
            <p className='products-list__description'>{capitalizeFirstLetter(product.description)}</p>
            <p className='products-list__price'>{product.price}€</p>
            <p className='products-list__taxes'>({capitalizeFirstLetter('impuestos no incluidos')})</p>
          </div>
        </li>
      )}

    </ul>
  )
}