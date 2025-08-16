import './ProductModal.css'
import type { Product } from '../../modules/products/interfaces/product.interface';
import { useLoaderData } from 'react-router';


export const ProductModal = () => {

  const product = useLoaderData() as Product;
 console.log(product);
 
  
  
  return (
    <div>ProductModal</div>
  )
}