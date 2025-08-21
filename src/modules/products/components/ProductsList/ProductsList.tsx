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

  const { searchTerm, maxPrice, allergens, mostPopular } = myMenu;
  const isSuggestions = location.pathname.startsWith('/suggestions');

  
  // FILTER
  const filteredProducts = products.filter((product) => {

    const isUnderMaxPrice = maxPrice === 0 || product.price <= maxPrice;

    const isAllergenSafe =
      allergens.length === 0 ||
      !product.allergens?.some((allergen: Allergen) => allergens.includes(allergen.name));

    const matchesSearch =
      searchTerm.trim() === '' || // if search term is empty return true so allows all products "   "
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    
    return isUnderMaxPrice && isAllergenSafe && matchesSearch;
  })
  .toSorted((a, b) => {
    return mostPopular ? b.rating - a.rating : 0; // only sort if mostPopular is true, 0 no sort applied
  });



  return (
    <section className='products'>
      <div className='products__container'>
        <ul className='products__list'>

          {filteredProducts?.map((product) => 
            <li key={product.id} className='products__li'>
              <Link 
                className='products__link' 
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
                <img className='products__img' src={product.thumbnail} alt={product.name} />
                {(product.suggested && isSuggestions) &&
                  <div className='products__suggestion-banner'>suggestion</div>
                }
              </Link>   
                <h3 
                  className={`products__title ${product.suggested && isSuggestions ? 'products__title--suggested' : ''}`}
                >
                    {capitalizeFirstLetter(product.name)}
                </h3>
            </li>
          )}

        </ul>
      </div>
    </section>
  )
}