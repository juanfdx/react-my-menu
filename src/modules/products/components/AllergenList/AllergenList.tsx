import './AllergenList.css';
import type { Allergen } from '../../interfaces/product.interface';


type AllergenListProps = {
  allergens: Allergen[]
}

export const AllergenList = ({ allergens }: AllergenListProps) => {
  
  
  return (
    <div className='allergen-list'>
      <h5 className='allergen-list__title'>Allergens</h5>

      <ul className='allergen-list__list'>
        {allergens.map(allergen => (
          <li 
            key={allergen.id}
            className='allergen-list__item' 
          >
            <img 
              className='allergen-list__img' 
              src={allergen.image} 
              alt={allergen.name} 
            />
            <span className='allergen-list__text'>{allergen.name}</span>
          </li>
        ))}
      </ul>

    </div>
  )
}