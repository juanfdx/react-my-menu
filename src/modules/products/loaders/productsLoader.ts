import { getProductsByCategory } from '../services/product.mock.service';




export const productsLoader = async ({ params }: { params?: { category?: string } }) => {
  
  const category = params?.category;
  
  if (!category) return [];

  try {
    const response = await getProductsByCategory(category);
    const data = response.data;

    return data ? data.products : [];

  } catch (error) {
    console.log(error);
    return [];
  }
}