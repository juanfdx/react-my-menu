import './CategoryFilter.css';
import { Link } from 'react-router';
// STORE
import { useLanguageStore } from '../../../../stores/useLanguageStore';
// DATA
import { categories } from '../../../../data/data-categories';



export const CategoryFilter = () => {
  
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);
  
  // Filter categories: try current language, then fallback to 'en'
  const localizedCategories = categories.filter((category) => category.locale === currentLanguage);

  const categoriesToRender = localizedCategories.length > 0 
    ? localizedCategories 
    : categories.filter((category) => category.locale === 'en');



  return (
    <section className='category-filter'>
      <div className='category-filter__container'>
        <ul className='category-filter__list'>

          {categoriesToRender?.map((category) => (
            <li key={category.id} className='category-filter__li'>
              <Link to={`/products/${category.link.toLocaleLowerCase()}`} className='category-filter__link'>
                {category.name}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </section>
  )
}