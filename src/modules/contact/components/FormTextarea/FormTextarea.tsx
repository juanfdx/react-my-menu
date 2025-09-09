import './FormTextarea.css';
// UTILS
import { capitalizeFirstLetter } from '../../../../shared/utils/string-methods';


type FormTextareaProps = {
  label: string;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  id: string;
  name: string;
  rows?: number;
  error?: string;
}


export const FormTextarea = ({label, textareaRef, id, name, rows, error}: FormTextareaProps) => {
  
  return (
    <div className='form-textarea'>
      <label 
        className='form-textarea__label' 
        htmlFor={id}>
          {capitalizeFirstLetter(label)}
      </label>
      <textarea 
        ref={textareaRef}
        id={id}
        className={`form-textarea__textarea ${error && 'form-textarea__textarea--error'}`}
        name={name} 
        rows={rows}
      ></textarea>
    </div>
  )
}