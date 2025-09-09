import './AllergenCheckbox.css';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';


type Props = {
  img: string
  allergen: string
  selectedAllergens: string[]
  handleInputChange: (text: string) => void
}

export const AllergenCheckbox = ({ img, allergen, selectedAllergens, handleInputChange }: Props) => {

  const isChecked = selectedAllergens?.includes(allergen);

  
  return (
    <label className='allergen-checkbox' htmlFor={`allergen-${allergen}`}>
      <input 
        className='allergen-checkbox__input'
        id={`allergen-${allergen}`} 
        type="checkbox"
        name="allergen"
        value={allergen}
        checked={isChecked}
        onChange={() =>handleInputChange(allergen)}
      />
      <div className={`allergen-checkbox__info-wrapper ${isChecked  ? 'allergen-checkbox__info-wrapper--active' : ''}`}>
        <img 
          className='allergen-checkbox__img' 
          src={img} 
          alt="allergen image" 
        />
        <span 
          className={`allergen-checkbox__text ${isChecked ? 'allergen-checkbox__text--active' : ''}`}
        >
          {capitalizeFirstLetter(allergen)}
        </span>
      </div>
    </label>
  )
}