import './SingleProduct.css';
import type { Product } from '../../modules/products/interfaces/product.interface';
import { useLocation, useParams } from 'react-router';
import { ProductsList } from '../../modules/products/components/ProductsList/ProductsList';
import { ModalError } from '../../shared/components/ModalError/ModalError';
import { ProductModal } from '../../modules/products/components/ProductModal/ProductModal';


export const SingleProduct = () => {

  // const product = useLoaderData() as Product;
  const location = useLocation();
  const { productId } = useParams();
 
   // Get the passed products array
  const state = location.state as { products?: Product[] } | null;
  const products = state?.products ?? [];
  
  const product = products?.find((p) => p.id === Number(productId));


  // 🔴 No productId in URL or invalid
  if (!productId || isNaN(Number(productId))) {
    return (
      <ModalError status={400} />
    );
  }

    // 🔴 No product found
  if (!product) {
    return (
      <ModalError status={404} />
    );
  }
 

  return (
    <>
      <ProductModal product={product} />
      <ProductsList products={products} />
    </>
   
  )
}