import type { ApiError } from '../../../shared/interfaces/error.interface';
import { getProductsByCategory } from '../services/product.mock.service';




export const productsLoader = async ({ params }: { params?: { category?: string } }) => {
  
  const category = params?.category;
  
  if (!category) {
    // Option 1: throw an error
    throw new Response("Missing category parameter", {
      status: 400,
      statusText: "Bad Request",
    });

    // OR Option 2: redirect
    // return redirect("/categories");
  }

  try {
    const response = await getProductsByCategory(category);
    const data = response.data;

    return data ? data.products : [];

  } catch (error) {
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