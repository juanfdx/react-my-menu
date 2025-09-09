import './Contact.css';
import { useEffect, useRef } from 'react';
import { Form, useActionData, useNavigation } from 'react-router';
// STORE
import { useMenuStore } from '../../stores/useMenuStore';
// UTILS
import { getSelectedLanguage } from '../../shared/utils/languages-methods';
import { capitalizeFirstLetter } from '../../shared/utils/string-methods';
import { focusOnInvalidInput } from '../../shared/utils/form-methods';
import { toast } from 'react-toastify';
// COMPONENTS
import { FormInput } from '../../modules/contact/components/FormInput/FormInput';
import { FormTextarea } from '../../modules/contact/components/FormTextarea/FormTextarea';


type ActionResponse = {
  success?: boolean;
  errors?: Record<string, string>;
};



export const Contact = () => {

  const { errors, success } = useActionData() as ActionResponse || {};
  const navigation = useNavigation();
  const myLanguage = useMenuStore((state) => state.menu.language);

  const isSubmitting = navigation.state === "submitting";
  
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
            <FormInput 
              label={language.formName} 
              inputRef={nameRef} 
              id='name'
              type='text' 
              name='name' 
              error={errors?.name} 
            />

            {/* Phone */}
            <FormInput 
              label={language.formPhone} 
              inputRef={phoneRef} 
              id='phone'
              type='text' 
              name='phone' 
              error={errors?.phone} 
            />

            {/* Email */}
            <FormInput 
              label={language.formEmail} 
              inputRef={emailRef} 
              id='email'
              type='email' 
              name='email' 
              error={errors?.email} 
            />
   
            {/* Textarea */}
            <FormTextarea 
              label={language.formMessage} 
              textareaRef={messageRef} 
              id='message'
              name='message' 
              rows={4}
              error={errors?.message} 
            />

            <button 
              className={`contact__button ${isSubmitting && 'contact__button--submitting'}`} 
              type="submit" 
              disabled={isSubmitting}
            >
              {capitalizeFirstLetter(language.formSubmit)}
            </button>
          </Form>
        </div>

      </div>
    </section>
  )
}