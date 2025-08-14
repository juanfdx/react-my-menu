import './CategoriesList.css';
import { Link } from 'react-router';
// DATA
import { categories } from '../../../../data/data-categories';


export const CategoriesList = () => {
  
  return (
    <section className='categories'>
      <div className='categories__container'>
        <ul className='categories__list'>

          {categories?.map((category) => 
            <li key={category.id} className='categories__li'>
              <Link className='categories__link' to={`/category/${category.id}`}>
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