import './Suggestions.css';
import { useLoaderData } from 'react-router';
// INTERFACES
import type { Product } from '../../modules/products/interfaces/product.interface';
// COMPONENTS
import { ProductsView } from '../../modules/products/components/ProductsView/ProductsView';
import { NoItemsMessage } from '../../shared/components/NoItemsMessage/NoItemsMessage';



export const Suggestions = () => {

  const products = useLoaderData() as Product[];

  const suggestedProducts = products.filter(product => product.suggested === true);
  

  if (suggestedProducts.length === 0) {
    return (
      <NoItemsMessage type='suggestions' showHomeButton />
    );
  };

  return ( 
    <ProductsView  products={suggestedProducts}/>
  )
}