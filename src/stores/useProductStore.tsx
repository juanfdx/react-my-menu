import type { Product } from '../modules/products/interfaces/product.interface';
import { create } from 'zustand';


interface ProductState {
  products: Product[];
  category: string;
  setProducts: (products: Product[]) => void;
  setCategory: (category: string) => void;
}


export const useProductStore = create<ProductState>((set) => ({
  products: [],
  category: '',
  setProducts: (products) => set({ products }),
  setCategory: (category) => set({ category }),
}));