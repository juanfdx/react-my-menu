import './ProductsList.css';
import { Link } from 'react-router';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';
// DATA
import { products } from '../../../../data/data-products';



export const ProductsList = () => {

  return (
    <section className='products'>
      <div className='products__container'>
        <ul className='products__list'>

          {products.map((product) => 
            <li key={product.id} className='products__li'>
              <Link className='products__link' to={`/product/${product.id}`}>
                <img className='products__img' src={product.thumbnail} alt={product.name} />
              </Link>   
                <h3 className='products__title'>{capitalizeFirstLetter(product.name)}</h3>
            </li>
          )}

        </ul>
      </div>
    </section>
  )
}