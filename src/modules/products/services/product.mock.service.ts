// DATA
import { categories } from '../../../data/data-categories';
import { products } from '../../../data/data-products';
import type { Category } from '../interfaces/category.interface';
import type { Product } from '../interfaces/product.interface';


interface ResponseProducts {
  readonly status: number;
  readonly data: {
    readonly products: Product[];
  };
}

interface ResponseProduct {
  readonly status: number;
  readonly data: {
    readonly product: Product | undefined;
  };
}

interface ResponseCategories {
  readonly status: number;
  readonly data: {
    readonly categories: Category[];
  };
}


/*==================================================
  GET PRODUCTS 
===================================================*/
export const getProducts = (): Promise<ResponseProducts> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve({ status: 200, data: { products } })
    }, 1000);
  });
}


/*========================================================
  GET PRODUCT BY ID 
========================================================*/
export const getProductById = (productId: number): Promise<ResponseProduct> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const product = products?.find((product) => product.id === productId);

      if (!product) {
        resolve({ 
          status: 404,
          data: { product: undefined }
        });
      }
      else {
        resolve({ status: 200, data: { product } });
      }
    }, 1000);
  })
} 


/*========================================================
  GET CATEGORIES
========================================================*/
export const getCategories = (): Promise<ResponseCategories> => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const isUnauthorized = false; // mock condition
      // const categories: Category[] = []; // mock empty response

      if (isUnauthorized) {
        reject({ 
          status: 403,
          statusText: "Forbidden", 
          message: "You are not authorized" 
        });
      } else if (!categories.length) {
        reject({ 
          status: 404,
          statusText: "Not Found", 
          message: "No categories found" 
        });
      } else {
        resolve({ status: 200, data: { categories } });
      }
    }, 1000);

    // setTimeout(() => {
    //   reject({ status: 500, message: "Database connection failed" }); // ✅ proper error
    // }, 1000);

  });
}


/*========================================================
  GET PRODUCTS BY CATEGORY 
========================================================*/
export const getProductsByCategory = (categoryName: string): Promise<ResponseProducts> => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const productsByCategory = products?.filter((product) => product.category.includes(categoryName));
      
      if (!productsByCategory.length) {
          reject({ 
          status: 404,
          statusText: "Not Found", 
          message: "No products found" 
        });
      }
      else {
        resolve({ status: 200, data: { products: productsByCategory } });
      }
    }, 1000);
  })
}


/*========================================================
  GET PRODUCTS BY MAX PRICE 
========================================================*/
export const getProductsByMaxPrice = (maxPrice: number): Promise<ResponseProducts> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const productsByMaxPrice = products?.filter((product) => product.price <= maxPrice);
      resolve({ status: 200, data: { products: productsByMaxPrice } });
    }, 1000);
  })
}


/*========================================================
  GET PRODUCTS BY RATING 
========================================================*/
export const getProductsByRating = (rating: number): Promise<ResponseProducts> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const productsByRating = products?.filter((product) => product.rating >= rating);
      resolve({ status: 200, data: { products: productsByRating } });
    }, 1000);
  })
}


/*========================================================
  GET PRODUCTS BY SEARCH 
========================================================*/
export const getProductsBySearch = (searchQuery: string): Promise<ResponseProducts> => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const productsBySearch = products?.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
      resolve({ status: 200, data: { products: productsBySearch } });
    }, 1000);
  })
}