import './AllergenCheckbox.css';


type Props = {
  img: string,
  text: string
}

export const AllergenCheckbox = ({ img, text }: Props) => {

  return (
    <label className='allergen-checkbox' htmlFor={`allergen-${text}`} >
      <input 
        id={`allergen-${text}`} 
        type="checkbox" 
        name='allergen'
      />
      <div className='allergen-checkbox__allergen'>
        <img 
          className='allergen-checkbox__img' 
          src={img} 
          alt="allergen image" 
        />
        <span className='allergen-checkbox__text'>{text}</span>
      </div>
    </label>
  )
}