import './Suggestions.css';
import { Link, useLoaderData } from 'react-router';
// INTERFACES
import type { Product } from '../../modules/products/interfaces/product.interface';
// COMPONENTS
import { ProductsView } from '../../modules/products/components/ProductsView/ProductsView';



export const Suggestions = () => {

  const products = useLoaderData() as Product[];

  const suggestedProducts = products.filter(product => product.suggested === true);
  

  if (suggestedProducts.length === 0) {
    return (
      <div className='suggestions'>
        <div className='suggestions__container'>
          <h1 className='suggestions__title'>No suggested products found.</h1>
          <Link className='suggestions__link' to='/'>
            Return to menu
          </Link>
        </div>
      </div>
    );
  };

  return ( 
    <ProductsView  products={suggestedProducts}/>
  )
}