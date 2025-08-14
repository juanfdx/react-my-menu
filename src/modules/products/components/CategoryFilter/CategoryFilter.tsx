import './CategoryFilter.css';
// DATA
import { categories } from '../../../../data/data-categories';
import { Link } from 'react-router';



export const CategoryFilter = () => {
  
  return (
    <section className='category-filter'>
      <div className='category-filter__container'>
        <ul className='category-filter__list'>

          {categories.map((category) => (
            <li key={category.id} className='category-filter__li'>
              <Link to={`/category/${category.id}`} className='category-filter__link'>
                {category.name}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </section>
  )
}