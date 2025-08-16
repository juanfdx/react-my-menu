import './Products.css';
import { useLoaderData } from 'react-router';
// COMPONENTS
import { ProductsList } from '../../modules/products/components/ProductsList/ProductsList';



export const Products = () => {

  const products = useLoaderData();
  
  return ( 
    <ProductsList  products={products}/> 
  )
}