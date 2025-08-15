import { getCategories } from '../services/product.mock.service';



export const categoriesLoader = async () => {

  try {
    const response = await getCategories();
    const data = response.data;

    return data ? data.categories : [];

  } catch (error) {
    console.log(error);
    return [];
  }
  
}