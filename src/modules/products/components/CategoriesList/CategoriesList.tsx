import './CategoriesList.css';
import { Link } from 'react-router';
import type { Category } from '../../interfaces/category.interface';


type Props = {
  categories: Category[]
}



export const CategoriesList = ({ categories }: Props) => {
  
  
  return (
    <section className='categories'>
      <div className='categories__container'>
        <ul className='categories__list'>

          {categories?.map((category) => 
            <li key={category.id} className='categories__li'>
              <Link className='categories__link' to={`/products/${category.name.toLocaleLowerCase()}`}>
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