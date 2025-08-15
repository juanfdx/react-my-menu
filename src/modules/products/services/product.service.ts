import customFetch from '../../../shared/utils/customFetch'



/*==================================================
  GET PRODUCTS 
===================================================*/
export const getProducts = async () => {
  return customFetch.get(`/products`);
}