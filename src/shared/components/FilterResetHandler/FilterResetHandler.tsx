import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
// STORE
import { useMenuStore } from '../../../stores/useMenuStore';



export const FilterResetHandler = () => {

  const location = useLocation();
  const setMyMaxPrice   = useMenuStore((state) => state.setMaxPrice);
  const setMySearchTerm = useMenuStore((state) => state.setSearchTerm);
  // const resetFilters = useMenuStore((state) => state.resetMenu);

  const prevPath = useRef<string | null>(null);


  useEffect(() => {
    const currentPath = location.pathname;

    // Only reset when moving between `/` as the categories page  and `/products/...`
    const isCategories = currentPath === '/' || currentPath.startsWith('/categories');
    const isProducts = currentPath.startsWith('/products');

    const wasCategories =
      prevPath.current === '/' || prevPath.current?.startsWith('/categories');
    const wasProducts = prevPath.current?.startsWith('/products');

    if (
      (isCategories && wasProducts) ||
      (isProducts && wasCategories)
    ) {
      setMyMaxPrice(0);
      setMySearchTerm('');
      // resetFilters();
    }

    prevPath.current = currentPath; 
    
  }, [location, setMyMaxPrice, setMySearchTerm]);


  return null; // nothing rendered
};