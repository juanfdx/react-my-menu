import type { ApiError } from '../../../shared/interfaces/error.interface';
//SERVICES
import { getProductById } from '../services/product.mock.service';



export const singleProductLoader = async ({ params }: { params?: { productId?: string } }) => {

  const productId = params?.productId ? Number(params?.productId) : null;
  
  if (!productId) {
    throw new Response("Missing productId parameter", {
      status: 400,
      statusText: "Bad Request",
    });
  }

  try {
    const response = await getProductById(productId);
    const data = response.data;


    if (!data?.product) {
      throw new Response("Product not found", {
        status: 404,
        statusText: "Not Found",
      });
    }

    return data?.product // always return an object

    
  } catch (error) {
    // ✅ If error is already a Response, rethrow it. because of the error boundary L12
    if (error instanceof Response) {
      throw error;
    }

    // ✅ If error matches your custom ApiError interface
    const typedError = error as ApiError;

    if (typedError.status && typedError.message) {
      throw new Response(typedError.message, {
        status: typedError.status,
        statusText: typedError.statusText
      });
    }

    // ❌ Unexpected error
    throw new Response("Unexpected error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}