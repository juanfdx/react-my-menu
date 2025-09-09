export interface ProductAllergens {
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
  allergens: ProductAllergens[];
  locale: string;
  active: boolean;
  suggested: boolean
}
