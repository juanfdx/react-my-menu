import './ProductsGrid.css';
import { Link, useLocation } from 'react-router';
// INTERFACES
import type { Product } from '../../interfaces/product.interface';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';
import { getSelectedLanguage } from '../../../../shared/utils/languages-methods';



export const ProductsGrid = ({ products }: { products: Product[]}) => {

  const myLanguage = useMenuStore((state) => state.menu.language);
  const language = getSelectedLanguage(myLanguage);
  
  const location = useLocation();
  // this used to add banner suggestions on product images L63
  const isSuggestions = location.pathname.startsWith('/suggestions');
  

  return (
    <ul className='products-grid'>
      
      {products.map((product) =>

        <li key={product.id} className='products-grid__item'>
          <Link 
            className='products-grid__link'
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
            <img className='products-grid__img' src={product.thumbnail} alt={product.name} />
            {(product.suggested && isSuggestions) &&
              <div className='products-grid__suggestion-banner'>{capitalizeFirstLetter(language.suggestion)}</div>
            }
          </Link>

          <h3 
            className={
              `products-grid__title ${product.suggested && isSuggestions 
                ? 'products-grid__title--suggested' 
                : ''}`
            }
          >
            {capitalizeFirstLetter(product.name)}
          </h3>

        </li>
      )}
    </ul>
  )
}