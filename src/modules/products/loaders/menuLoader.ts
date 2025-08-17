import { getJsonFromLocalStorage } from '../../../shared/utils/localStorage';


export const menuLoader = async () => {
  

  getJsonFromLocalStorage('myMenu', {
      wishlist: [],
      ratedProducts: {},
      allergens: [],
      maxPrice: 0,
      searchTerm: '',
      language: 'en',
    });

    return null;
}