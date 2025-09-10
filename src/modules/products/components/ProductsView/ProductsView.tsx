import './ProductsView.css';
// INTERFACES
import type { Product, ProductAllergen } from '../../interfaces/product.interface';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// COMPONENTS
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';
import { ProductsList } from '../ProductsList/ProductsList';




export const ProductsView = ({ products }: { products: Product[]}) => {

  const myMenu = useMenuStore((state) => state.menu);
  const { searchTerm, maxPrice, allergens, mostPopular, viewMode } = myMenu;

  
  // FILTER
  const filteredProducts = products.filter((product) => {

    const isActive = product.active;    

    const isUnderMaxPrice = maxPrice === 0 || product.price <= maxPrice;

    const isAllergenSafe =
      allergens.length === 0 ||
      !product.allergens?.some((allergen: ProductAllergen) => allergens.includes(allergen.name));

    const matchesSearch =
      searchTerm.trim() === '' || // if search term is empty return true so allows all products "   "
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    
    return isActive && isUnderMaxPrice && isAllergenSafe && matchesSearch;
  })
  .toSorted((a, b) => {
    return mostPopular ? b.rating - a.rating : 0; // only sort if mostPopular is true, 0 no sort applied
  });
  
  

  return (
    <section className='products-view'>
      <div className='products-view__container'>
        
        {viewMode === 'grid' && <ProductsGrid products={filteredProducts} />}
        {viewMode === 'list' && <ProductsList products={filteredProducts} />}

      </div>
    </section>
  )
}