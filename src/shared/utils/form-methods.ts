import type { RefObject } from 'react';
import { keyExists } from './object-methods';



/*========================================================
  REGEX EMAIL VALIDATION
========================================================*/
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !emailRegex.test(email);
};


/*========================================================
  REGEX PHONE NUMBER VALIDATION
========================================================*/
export interface PhoneNumberValidator {
  (phone: string): boolean;
}

export const validatePhoneNumber: PhoneNumberValidator = (phone) => {
  const phoneRegex = /^\d{7,11}$/; // only numbers between 6 and 11 digits
  return !phoneRegex.test(phone);
};


/*========================================================
  FOCUS ON INVALID INPUT
========================================================*/
type Errors = Record<string, string> | undefined;

type Refs = Record<string, RefObject<HTMLElement | null>>;

export const focusOnInvalidInput = (errors: Errors, refs: Refs): void => {
  if (errors) {
    const invalidInput = Object.keys(errors).find((key) => errors[key]); 
    if (invalidInput) refs?.[invalidInput]?.current?.focus();
  }
};


/*========================================================
  VALIDATE FORM FIELDS
========================================================*/
export interface FormData {
  [key: string]: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ValidateFormResult {
  isValid: boolean;
  errors: FormErrors;
}

export const validateForm = (formData: FormData): ValidateFormResult => {
  let isValid = true;
  const errors: FormErrors = {};

  // Name validation
  if (keyExists(formData, 'name')) {
    if (!formData.name) {
      errors.name = 'Please enter your name.';

    } else if (formData.name.length < 3 || formData.name.length > 20) {
      errors.name = 'Name must be between 3 and 20 characters';
    }
  } 

  // Phone number validation
  if (keyExists(formData, 'phone')) {
    if (validatePhoneNumber(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }    
  }

  // Email validation
  if (keyExists(formData, 'email')) {
    if (!formData.email) {
      errors.email = 'Please enter your email.';
  
    } else if (validateEmail(formData.email)) {
      errors.email = 'Email is invalid';
    }    
  }

  // Message validation
  if (keyExists(formData, 'message')) {
    if (!formData.message) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
  }



  if (Object.keys(errors).length) {
    isValid = false;
  }

  return { isValid, errors };
}