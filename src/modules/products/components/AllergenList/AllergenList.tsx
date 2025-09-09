import './AllergenList.css';
// INTERFACES
import type { ProductAllergens } from '../../interfaces/product.interface';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';
import { getSelectedLanguage } from '../../../../shared/utils/languages-methods';


type AllergenListProps = {
  allergens: ProductAllergens[]
}


export const AllergenList = ({ allergens }: AllergenListProps) => {
  
  const myLanguage = useMenuStore((state) => state.menu.language);
  const language = getSelectedLanguage(myLanguage);


  return (
    <div className='allergen-list'>
      <h5 className='allergen-list__title'>{capitalizeFirstLetter(language.allergens)}</h5>

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
            <span className='allergen-list__text'>{capitalizeFirstLetter(allergen.name)}</span>
          </li>
        ))}
      </ul>

    </div>
  )
}