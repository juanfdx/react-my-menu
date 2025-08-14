import './Products.css';
// COMPONENTS
import { ProductFilterPanel } from '../../modules/products/components/ProductFilterPanel/ProductFilterPanel';
import { CategoryFilter } from '../../modules/products/components/CategoryFilter/CategoryFilter';
import { ProductsList } from '../../modules/products/components/ProductsList/ProductsList';
// import { CategoriesList } from '../../modules/products/components/CategoriesList/categoriesList';



export const Products = () => {
  
  return (
    <>
      <ProductFilterPanel />
      <CategoryFilter />
      <ProductsList />
      {/* <CategoriesList /> */}
    </>
  )
}