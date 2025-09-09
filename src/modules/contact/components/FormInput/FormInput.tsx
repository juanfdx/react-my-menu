import './FormInput.css';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';


type FormInputProps = {
  label: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  id: string;
  type: string;
  name: string;
  error?: string;
}


export const FormInput = ({label, inputRef, id, type, name, error}: FormInputProps) => {
  
  return (
    <div className='form-input'>
      <label 
        className='form-input__label' 
        htmlFor={id}
      >
        {capitalizeFirstLetter(label)}
      </label>
      <input
        ref={inputRef}
        id={id}
        className={`form-input__input ${error && 'form-input__input--error'}`}
        type={type}
        name={name} 
        autoComplete='off'
      />
    </div>
  )
}