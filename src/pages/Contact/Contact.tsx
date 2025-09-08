import './Contact.css';
import { Form } from 'react-router';
// STORE
import { useMenuStore } from '../../stores/useMenuStore';
// UTILS
import { getSelectedLanguage } from '../../shared/utils/languages-methods';
import { capitalizeFirstLetter } from '../../shared/utils/string-methods';



export const Contact = () => {

  const myLanguage = useMenuStore((state) => state.menu.language);
  const language = getSelectedLanguage(myLanguage);
  
  
  return (
    <section className='contact'>
      <div className='contact__container'>
        
        <div className='contact__col'>
          <h1 className='contact__title'>{capitalizeFirstLetter(language.contactTitle)}</h1>
          <p className='contact__text'>{capitalizeFirstLetter(language.contactText)}</p>
        </div>

        <div className='contact__col'>
          <Form method='POST' className='contact__form' >
            {/* Name */}
            <div className='contact__form-group'>
              <label 
                className='contact__label' 
                htmlFor="name"
              >
                {capitalizeFirstLetter(language.formName)}
              </label>
              <input
                 id="name" 
                 className='contact__input' 
                 type="text" 
                 name="name" 
                 autoComplete='off'
                />
            </div>
            {/* Phone */}
            <div className='contact__form-group'>
              <label 
                className='contact__label' 
                htmlFor="phone"
              >
                {capitalizeFirstLetter(language.formPhone)}
              </label>
              <input 
                id="phone" 
                className='contact__input' 
                type="text" 
                name="phone"
                autoComplete='off'
              />
            </div>
            {/* Email */}
            <div className='contact__form-group'>
              <label 
                className='contact__label' 
                htmlFor="email"
              >
                {capitalizeFirstLetter(language.formEmail)}
              </label>
              <input 
                id="email" 
                className='contact__input' 
                type="email" 
                name="email"
                autoComplete='off' 
              />
            </div>
            {/* Textarea */}
            <div className='contact__form-group'>
              <label 
                className='contact__label' 
                htmlFor="message"
              >
                {capitalizeFirstLetter(language.formMessage)}
              </label>
              <textarea 
                className='contact__textarea' 
                name="message" 
                id="message" 
                cols={30} 
                rows={4}
              ></textarea>
            </div>

            <button className='contact__button' type="submit">
              {capitalizeFirstLetter(language.formSubmit)}
            </button>
          </Form>
        </div>

      </div>
    </section>
  )
}