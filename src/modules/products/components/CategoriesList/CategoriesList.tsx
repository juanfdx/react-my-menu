import './CategoriesList.css';
import { Link } from 'react-router';
// INTERFACES
import type { Category } from '../../interfaces/category.interface';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';


type Props = {
  categories: Category[]
}


export const CategoriesList = ({ categories }: Props) => {
  
  const myLanguage = useMenuStore((state) => state.menu.language);
  const myMenu     = useMenuStore((state) => state.menu);
  const { searchTerm } = myMenu;
  
  // FILTER categories by language: try current language, then fallback to 'en'
  const localizedCategories = categories.filter((category) => category.locale === myLanguage);

  const categoriesToRender = localizedCategories.length > 0 
    ? localizedCategories 
    : categories.filter((category) => category.locale === 'en');
  
  // FILTER by searchTerm
  const filteredCategories = categoriesToRender.filter((category) => {
    
    const matchesSearch = 
      searchTerm.trim() === '' || // if search term is empty return true so allows all categories "   "
      category.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });



  return (
    <section className='categories'>
      <div className='categories__container'>
        <ul className='categories__list'>

          {filteredCategories?.map((category) => 
            <li key={category.id} className='categories__li'>
              <Link className='categories__link' to={`/products/${category.link.toLocaleLowerCase()}`}>
                <img className='categories__img' src={category.image} alt={category.name} />
                <h3 className='categories__title'>{category.name}</h3>
              </Link>
            </li>
          )}

        </ul>
      </div>
    </section>
  )
}