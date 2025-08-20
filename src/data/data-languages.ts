export interface Language {
  id: string;
  name: string;
  locale: string;
  image: string;
}

// IMAGES
import engFlag from '../assets/images/flags/eng-flag.png';
import spaFlag from '../assets/images/flags/spa-flag.webp';
import fraFlag from '../assets/images/flags/fra-flag.webp';
import gerFlag from '../assets/images/flags/ger-flag.png';
import itaFlag from '../assets/images/flags/ita-flag.webp';



export const languages: Language[] = [
  {
    id: '1',
    name: 'spanish',
    locale: 'es',
    image: spaFlag
  },
  {
    id: '2',
    name: 'english',
    locale: 'en',
    image: engFlag
  },
  {
    id: '3',
    name: 'german',
    locale: 'de',
    image: gerFlag
  },
  {
    id: '4',
    name: 'french',
    locale: 'fr',
    image: fraFlag
  },
  {
    id: '5',
    name: 'italian',
    locale: 'it',
    image: itaFlag
  }
]