import type { Allergen } from '../../../data/data-allergens';


export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  image: string;
  rating: number;
  allergens: Allergen[];
  locale: string;
  active: boolean;
  suggested: boolean
}
