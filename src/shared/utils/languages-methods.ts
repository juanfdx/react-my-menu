import { languages, type Language } from '../../data/data-languages'


/*========================================================
  GET SELECTED LANGUAGE
========================================================*/
export const getSelectedLanguage = (language: string): Language => {
  const selectedLanguage = languages[language] ?? languages['es'];
  return selectedLanguage
}