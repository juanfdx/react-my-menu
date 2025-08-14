export interface Language {
  id: string;
  name: string;
  locale: string;
  image: string;
}

// IMAGES
import engFlag from '../assets/images/flags/eng-flag.png';
import spaFlag from '../assets/images/flags/spa-flag.webp';


export const languages: Language[] = [
  {
    id: '1',
    name: 'english',
    locale: 'en',
    image: engFlag
  },
  {
    id: '2',
    name: 'spanish',
    locale: 'es',
    image: spaFlag
  }
]