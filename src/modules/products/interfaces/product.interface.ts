export interface ProductAllergen {
  id: number;
  name: string;
  image: string;
  locale: string;
}


export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  image: string;
  rating: number;
  allergens: ProductAllergen[];
  locale: string;
  active: boolean;
  suggested: boolean
}
