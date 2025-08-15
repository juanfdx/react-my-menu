import type { Allergen } from '../modules/products/interfaces/product.interface';
// IMAGES
import apio from '../assets/images/allergens/apio.png'
import gluten from '../assets/images/allergens/gluten.png'
import eggs from '../assets/images/allergens/eggs.png'
import milk from '../assets/images/allergens/milk.png'
import fish from '../assets/images/allergens/fish.png'
import soy from '../assets/images/allergens/soy.png'
import sesame from '../assets/images/allergens/sesame.png'
import nuts from '../assets/images/allergens/nuts.png'
import crustaceans from '../assets/images/allergens/crustaceans.png'
import molluscs from '../assets/images/allergens/molluscs.png'


export const allergens: Allergen[] = [
  {
    id: 1,
    name: 'gluten',
    image: gluten,
    locale: 'en',
  },
  {
    id: 2,
    name: 'eggs',
    image: eggs,
    locale: 'en',
  },
  {
    id: 3,
    name: 'milk',
    image: milk,
    locale: 'en',
  },
  {
    id: 4,
    name: 'fish',
    image: fish,
    locale: 'en',
  },
  {
    id: 5,
    name: 'apio',
    image: apio,
    locale: 'en',
  },
  {
    id: 6,
    name: 'soy',
    image: soy,
    locale: 'en',
  },
  {
    id: 7,
    name: 'sesame',
    image: sesame,
    locale: 'en',
  },
  {
    id: 8,
    name: 'nuts',
    image: nuts,
    locale: 'en',
  },
  {
    id: 9,
    name: 'crustaceans',
    image: crustaceans,
    locale: 'en',
  },
  {
    id: 10,
    name: 'molluscs',
    image: molluscs,
    locale: 'en',
  }
]