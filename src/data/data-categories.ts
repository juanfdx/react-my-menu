import type { Category } from '../modules/products/interfaces/category.interface'
// IMAGES
import pork from '../assets/images/products/pork/thumbnails/thumb-taquitos-pork.jpg'
import beef from '../assets/images/products/beef/thumbnails/thumb-veal-in-sauce.jpg'
import seafood from '../assets/images/products/seafood/thumbnails/thumb-battered-squid .jpg'
import pasta from '../assets/images/products/pasta/thumbnails/thumb-bolognese.jpg'


export const categories: Category[] = [
  {
    id: 1,
    name: 'pork',
    description: 'pork',
    image: pork,
    locale: 'en',
    active: true
  },
  {
    id: 2,
    name: 'beef',
    description: 'beef',
    image: beef,
    locale: 'en',
    active: true
  },
  {
    id: 3,
    name: 'seafood',
    description: 'seafood',
    image: seafood,
    locale: 'en',
    active: true
  },
  {
    id: 4,
    name: 'pasta',
    description: 'pasta',
    image: pasta,
    locale: 'en',
    active: true
  },
]