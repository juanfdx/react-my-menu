import type { Product } from './product.interface';


export interface MyMenu {
  wishlist: Product[];  
  mostPopular: boolean;                   // Product IDs
  ratedProducts: Record<number, number>;  // productId -> rating (1 to 5)
  allergens: string[];                    // Allergen tags to filter out
  maxPrice: number;
  searchTerm: string;
  viewMode: 'grid' | 'list';
  language: string;
}