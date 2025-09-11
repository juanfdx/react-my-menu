import type { Category } from '../modules/products/interfaces/category.interface'
// IMAGES
import pork from '../assets/images/products/pork/thumbnails/thumb-taquitos-pork.webp'
import beef from '../assets/images/products/beef/thumbnails/thumb-veal-in-sauce.webp'
import seafood from '../assets/images/products/seafood/thumbnails/thumb-battered-squid.webp'
import pasta from '../assets/images/products/pasta/thumbnails/thumb-bolognese.webp'
import poultry from '../assets/images/products/poultry/thumbnails/thumb-chicken-strips.webp'
import desserts from '../assets/images/products/desserts/thumbnails/thumb-cheesecake.webp'
import salads from '../assets/images/products/salads/thumbnails/thumb-watercress-salad.webp'




export const categories: Category[] = [
  {
    id: '31',
    name: 'ensaladas',
    description: 'ensaladas',
    image: salads,
    link: 'salads',
    locale: 'es',
    active: true
  },
  {
    id: '32',
    name: 'salads',
    description: 'salads',
    image: salads,
    link: 'salads',
    locale: 'en',
    active: true
  },
  {
    id: '33',
    name: 'salate',
    description: 'salate',
    image: salads,
    link: 'salads',
    locale: 'de',
    active: true
  },
    {
    id: '34',
    name: 'salades',
    description: 'salades',
    image: salads,
    link: 'salads',
    locale: 'fr',
    active: true
  },
  {
    id: '35',
    name: 'insalate',
    description: 'insalate',
    image: salads,
    link: 'salads',
    locale: 'it',
    active: true
  },
  {
    id: '1',
    name: 'pork',
    description: 'pork',
    image: pork,
    link: 'pork',
    locale: 'en',
    active: true
  },
  {
    id: '2',
    name: 'beef',
    description: 'beef',
    image: beef,
    link: 'beef',
    locale: 'en',
    active: true
  },
  {
    id: '3',
    name: 'seafood',
    description: 'seafood',
    image: seafood,
    link: 'seafood',
    locale: 'en',
    active: true
  },
  {
    id: '4',
    name: 'pasta',
    description: 'pasta',
    image: pasta,
    link: 'pasta',
    locale: 'en',
    active: true
  },
    {
    id: '5',
    name: 'poultry',
    description: 'poultry',
    image: poultry,
    link: 'poultry',
    locale: 'en',
    active: true
  },
    {
    id: '6',
    name: 'del cerdo',
    description: 'del cerdo',
    image: pork,
    link: 'pork',
    locale: 'es',
    active: true
  },
  {
    id: '7',
    name: 'de la ternera',
    description: 'de la ternera',
    image: beef,
    link: 'beef',
    locale: 'es',
    active: true
  },
  {
    id: '8',
    name: 'del mar',
    description: 'del mar',
    image: seafood,
    link: 'seafood',
    locale: 'es',
    active: true
  },
  {
    id: '9',
    name: 'pasta',
    description: 'pasta',
    image: pasta,
    link: 'pasta',
    locale: 'es',
    active: true
  },
    {
    id: '10',
    name: 'aves',
    description: 'aves',
    image: poultry,
    link: 'poultry',
    locale: 'es',
    active: true
  },
  {
    id: '11',
    name: 'schweinefleisch',
    description: 'schweinefleisch',
    image: pork,
    link: 'pork',
    locale: 'de',
    active: true
  },
  {
    id: '12',
    name: 'rindfleisch',
    description: 'rindfleisch',
    image: beef,
    link: 'beef',
    locale: 'de',
    active: true
  },
  {
    id: '13',
    name: 'meeresfrüchte',
    description: 'meeresfrüchte',
    image: seafood,
    link: 'seafood',
    locale: 'de',
    active: true
  },
  {
    id: '14',
    name: 'pasta',
    description: 'pasta',
    image: pasta,
    link: 'pasta',
    locale: 'de',
    active: true
  },
    {
    id: '15',
    name: 'geflügel',
    description: 'geflügel',
    image: poultry,
    link: 'poultry',
    locale: 'de',
    active: true
  },
    {
    id: '16',
    name: 'porc',
    description: 'porc',
    image: pork,
    link: 'pork',
    locale: 'fr',
    active: true
  },
  {
    id: '17',
    name: 'bœuf',
    description: 'bœuf',
    image: beef,
    link: 'beef',
    locale: 'fr',
    active: true
  },
  {
    id: '18',
    name: 'fruit de mer',
    description: 'fruit de mer',
    image: seafood,
    link: 'seafood',
    locale: 'fr',
    active: true
  },
  {
    id: '19',
    name: 'pasta',
    description: 'pasta',
    image: pasta,
    link: 'pasta',
    locale: 'fr',
    active: true
  },
  {
    id: '20',
    name: 'volaille',
    description: 'volaille',
    image: poultry,
    link: 'poultry',
    locale: 'fr',
    active: true
  },
  {
    id: '21',
    name: 'maiale',
    description: 'maiale',
    image: pork,
    link: 'pork',
    locale: 'it',
    active: true
  },
  {
    id: '22',
    name: 'manzo',
    description: 'manzo',
    image: beef,
    link: 'beef',
    locale: 'it',
    active: true
  },
  {
    id: '23',
    name: 'pesce',
    description: 'pesce',
    image: seafood,
    link: 'seafood',
    locale: 'it',
    active: true
  },
  {
    id: '24',
    name: 'pasta',
    description: 'pasta',
    image: pasta,
    link: 'pasta',
    locale: 'it',
    active: true
  },
  {
    id: '25',
    name: 'pollame',
    description: 'pollame',
    image: poultry,
    link: 'poultry',
    locale: 'it',
    active: true
  },
  {
    id: '26',
    name: 'postres',
    description: 'postres',
    image: desserts,
    link: 'desserts',
    locale: 'es',
    active: true
  },
  {
    id: '27',
    name: 'desserts',
    description: 'desserts',
    image: desserts,
    link: 'desserts',
    locale: 'en',
    active: true
  },
  {
    id: '28',
    name: 'desserts',
    description: 'desserts',
    image: desserts,
    link: 'desserts',
    locale: 'de',
    active: true
  },
  {
    id: '29',
    name: 'desserts',
    description: 'desserts',
    image: desserts,
    link: 'desserts',
    locale: 'fr',
    active: true
  },
  {
    id: '30',
    name: 'dolci',
    description: 'dolci',
    image: desserts,
    link: 'desserts',
    locale: 'it',
    active: true
  }
]