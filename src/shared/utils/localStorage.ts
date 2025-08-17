import type { MyMenu } from '../../modules/products/interfaces/myMenu.interface';


/*========================================================
  GET FROM LOCAL STORAGE
========================================================*/
export function getJsonFromLocalStorage<T>(key: string, fallback: T): T {

  try {
    const stored = localStorage.getItem(key);
    
    if (stored) {
      return JSON.parse(stored);
    } else {
      // Key doesn't exist, save fallback to localStorage
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    
  } catch (error) {
    console.warn(`Failed to parse localStorage key "${key}":`, error);
    return fallback;
  }
}


/*========================================================
  UPDATE MY MENU IN LOCAL STORAGE
========================================================*/
const MY_MENU_KEY = 'myMenu';
const defaultMenu: MyMenu = {
  wishlist: [],
  ratedProducts: {},
  allergens: [],
  maxPrice: 0,
  searchTerm: '',
  language: 'en',
};

export function updateMyMenu(updates: Partial<MyMenu>): MyMenu {
  const current = getJsonFromLocalStorage<MyMenu>(MY_MENU_KEY, defaultMenu);
  const updated = { ...current, ...updates };
  localStorage.setItem(MY_MENU_KEY, JSON.stringify(updated));
  return updated;
}


/*========================================================
  GET MY MENU FROM LOCAL STORAGE
========================================================*/
export function getMyMenu(): MyMenu {
  return getJsonFromLocalStorage<MyMenu>(MY_MENU_KEY, defaultMenu);
}