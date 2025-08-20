import { create } from 'zustand';


export type Locale = 'es' | 'en' | 'de' |'fr' | 'it'; // add more as needed

interface LanguageStore {
  currentLanguage: Locale;
  setLanguage: (lang: Locale) => void;
}


export const useLanguageStore = create<LanguageStore>((set) => ({
  currentLanguage: 'es', // default language
  setLanguage: (lang) => set({ currentLanguage: lang }),
}));
