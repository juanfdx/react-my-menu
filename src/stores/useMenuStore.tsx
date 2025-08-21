import type { MyMenu } from '../modules/products/interfaces/myMenu.interface';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const defaultMenu: MyMenu = {
  wishlist: [],
  mostPopular: true,
  ratedProducts: {},
  allergens: [],
  maxPrice: 0,
  searchTerm: '',
  language: 'es', 
};


interface MenuStore {
  menu: MyMenu;
  addToWishlist: (productId: number) => void;
  setMostPopular: (value: boolean) => void;
  removeFromWishlist: (productId: number) => void;
  setRatedProducts: (productId: number, rating: number) => void;
  removeRatedProduct: (productId: number) => void;
  setMaxPrice: (price: number) => void;
  setAllergens: (allergens: string[]) => void;
  setSearchTerm: (term: string) => void;
  setLanguage: (lang: string) => void;
  resetMenu: () => void;
}

// persist() make the store persistent in localStorage
export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      menu: defaultMenu,
      addToWishlist: (productId: number) => set((state) => ({ 
        menu: { ...state.menu, wishlist: [...state.menu.wishlist, productId] } 
      })),
      removeFromWishlist: (productId: number) => set((state) => ({ 
        menu: { ...state.menu, wishlist: state.menu.wishlist.filter((id) => id !== productId) } 
      })),
      setMostPopular: (value: boolean) => set((state) => ({ menu: { ...state.menu, mostPopular: value } })),
      setRatedProducts: (productId: number, rating: number) => set((state) => ({
        menu: { ...state.menu, ratedProducts: { ...state.menu.ratedProducts, [productId]: rating } }
      })),
      // removes a record
      removeRatedProduct: (productId: number) => set((state) => {
        const newRatedProducts = { ...state.menu.ratedProducts };
        delete newRatedProducts[productId];
        return { menu: { ...state.menu, ratedProducts: newRatedProducts } };
      }),
      setMaxPrice: (price: number) => set((state) => ({ menu: { ...state.menu, maxPrice: price } })),
      setAllergens: (allergens: string[]) => set((state) => ({ menu: { ...state.menu, allergens } })),
      setSearchTerm: (term: string) => set((state) => ({ menu: { ...state.menu, searchTerm: term } })),
      setLanguage: (lang: string) => set((state) => ({ menu: { ...state.menu, language: lang } })),
      resetMenu: () => set({ menu: defaultMenu }),
    }),
    {
      name: 'myMenu', // unique name for storage key
    }
  )
);