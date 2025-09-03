import './Products.css';
import { useLoaderData } from 'react-router';
// COMPONENTS
import { ProductsView } from '../../modules/products/components/ProductsView/ProductsView';



export const Products = () => {

  const products = useLoaderData();
  
  return ( 
    <ProductsView  products={products}/>
  )
}