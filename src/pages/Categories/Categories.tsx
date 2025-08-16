import './Categories.css';
import { useLoaderData  } from 'react-router';
// COMPONENTS
import { CategoriesList } from '../../modules/products/components/CategoriesList/CategoriesList';



export const Categories = () => {

  const categories = useLoaderData(); //elementError catch the errors   
  
  return (
    <CategoriesList categories={categories} />
  )
}