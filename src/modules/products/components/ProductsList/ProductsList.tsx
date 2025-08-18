import './ProductsList.css';
import type { Allergen, Product } from '../../interfaces/product.interface';
import { Link, useLocation } from 'react-router';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';



export const ProductsList = ({ products }: { products: Product[]}) => {

  const location = useLocation();
  const myMenu = useMenuStore((state) => state.menu);

  const { maxPrice, allergens } = myMenu;

  const filteredProducts = products.filter((product) => {
    const isUnderMaxPrice = maxPrice === 0 || product.price <= maxPrice;

    const isAllergenSafe =
      allergens.length === 0 ||
      !product.allergens?.some((allergen: Allergen) => allergens.includes(allergen.name));

    return isUnderMaxPrice && isAllergenSafe;
  });

  return (
    <section className='products'>
      <div className='products__container'>
        <ul className='products__list'>

          {filteredProducts?.map((product) => 
            <li key={product.id} className='products__li'>
              <Link 
                className='products__link' 
                to={`/products/${product.category}/${product.id}`}
                state={{
                  backgroundLocation: location,
                  products, // ✅ pass full array here
                }}
              >
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