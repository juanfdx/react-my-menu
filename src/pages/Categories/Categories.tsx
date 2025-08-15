import './Categories.css';
import { CategoriesList } from '../../modules/products/components/CategoriesList/CategoriesList';
import { useLoaderData } from 'react-router';


export const Categories = () => {

  const categories = useLoaderData();
  
  if(!categories || categories.length === 0) {
    return (
      <h1>No categories found...</h1>
    )
  }

   
  
  return (
      <CategoriesList categories={categories} />
  )
}