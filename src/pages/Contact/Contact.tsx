import './Contact.css';
import { useEffect, useRef } from 'react';
import { Form, useActionData } from 'react-router';
// STORE
import { useMenuStore } from '../../stores/useMenuStore';
// UTILS
import { getSelectedLanguage } from '../../shared/utils/languages-methods';
import { capitalizeFirstLetter } from '../../shared/utils/string-methods';
import { focusOnInvalidInput } from '../../shared/utils/form-methods';
import { toast } from 'react-toastify';

type ActionResponse = {
  success?: boolean;
  errors?: Record<string, string>;
};

export const Contact = () => {

  const { errors, success } = useActionData() as ActionResponse || {};

  const myLanguage = useMenuStore((state) => state.menu.language);
  const language = getSelectedLanguage(myLanguage);
  
  const nameRef  = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const refs = {
    name: nameRef,
    phone: phoneRef,
    email: emailRef,
    message: messageRef
  }
  
  // Focus on first invalid input (after form submission)
  focusOnInvalidInput(errors, refs);

  // Focus name field on first render
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  
  useEffect(() => {
    if (success) {
      toast.success(capitalizeFirstLetter(language.formSuccess));
      formRef.current?.reset();
    }
  }, [success, language.formSuccess]);



  return (
    <section className='contact'>
      <div className='contact__container'>
        
        <div className='contact__col'>
          <h1 className='contact__title'>{capitalizeFirstLetter(language.contactTitle)}</h1>
          <p className='contact__text'>{capitalizeFirstLetter(language.contactText)}</p>
        </div>

        <div className='contact__col'>
          <Form ref={formRef} method='POST' className='contact__form' >
            {/* Name */}
            <div className='contact__form-group'>
              <label 
                className='contact__label' 
                htmlFor="name"
              >
                {capitalizeFirstLetter(language.formName)}
              </label>
              <input
                 ref={nameRef}
                 id="name" 
                 className={`contact__input ${errors?.name && 'contact__input--error'}`} 
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
                ref={phoneRef}
                id="phone" 
                className={`contact__input ${errors?.phone && 'contact__input--error'}`} 
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
                ref={emailRef}
                id="email" 
                className={`contact__input ${errors?.email && 'contact__input--error'}`} 
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
                ref={messageRef}
                className={`contact__textarea ${errors?.message && 'contact__textarea--error'}`} 
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