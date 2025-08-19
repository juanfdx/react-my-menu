
export interface MyMenu {
  wishlist: number[];  
  mostPopular: boolean;                   // Product IDs
  ratedProducts: Record<number, number>;  // productId -> rating (1 to 5)
  allergens: string[];                    // Allergen tags to filter out
  maxPrice: number;
  searchTerm: string;
  language: string;
}