import type { ApiError } from '../../../shared/interfaces/error.interface';
import { getCategories } from '../services/product.mock.service';



export const categoriesLoader = async () => {

  try {
    const response = await getCategories();
    const data = response.data;

    return data ? data.categories : [];

  } catch (error) {
    // if error is not typed
    // if (error?.status && error?.message) {
    //   throw new Response(error.message, {
    //     status: error.status,
    //     statusText: error.message,
    //   });
    // }

    const typedError = error as ApiError;

    if (typedError.status && typedError.message) {
      throw new Response(typedError.message, {
        status: typedError.status,
        statusText: typedError.statusText
      });
    }

    // Unexpected error
    throw new Response("Unexpected error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
  
}