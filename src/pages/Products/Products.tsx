import './Products.css';
import { useLoaderData } from 'react-router';
// COMPONENTS
import { ProductsList } from '../../modules/products/components/ProductsList/ProductsList';



export const Products = () => {

  const products = useLoaderData();

  if(!products || products.length === 0) {
    return (
      <h1>No products found...</h1>
    )
  }
  
  return (
    <>
      <ProductsList  products={products}/>
    </>
  )
}