export interface Allergen {
  id: number;
  name: string;
  value: string;
  image: string;
}

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


export const allergens: Record<string, Allergen[]> = {
  es: [
    {
      id: 1,
      name: 'gluten',
      value: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'huevos',
      value: 'eggs',
      image: eggs,
    },
    {
      id: 3,
      name: 'leche',
      value: 'milk',
      image: milk,
    },
    {
      id: 4,
      name: 'pescado',
      value: 'fish',
      image: fish,
    },
    {
      id: 5,
      name: 'apio',
      value: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soya',
      value: 'soy',
      image: soy,
    },
    {
      id: 7,
      name: 'sesamo',
      value: 'sesame',
      image: sesame,
    },
    {
      id: 8,
      name: 'nueces',
      value: 'nuts',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustaceos',
      value: 'crustaceans',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'moluscos',
      value: 'molluscs',
      image: molluscs,
    },
  ],
  en: [
    {
      id: 1,
      name: 'gluten',
      value: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'eggs',
      value: 'eggs',
      image: eggs,
    },
    {
      id: 3,
      name: 'milk',
      value: 'milk',
      image: milk,
    },
    {
      id: 4,
      name: 'fish',
      value: 'fish',
      image: fish,
    },
    {
      id: 5,
      name: 'apio',
      value: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soy',
      value: 'soy',
      image: soy,
    },
    {
      id: 7,
      name: 'sesame',
      value: 'sesame',
      image: sesame,
    },
    {
      id: 8,
      name: 'nuts',
      value: 'nuts',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustaceans',
      value: 'crustaceans',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'molluscs',
      value: 'molluscs',
      image: molluscs,
    }
  ],
  de: [
    {
      id: 1,
      name: 'gluten',
      value: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'eier',
      value: 'eggs',
      image: eggs,
    },
    {
      id: 3,
      name: 'milch',
      value: 'milk',
      image: milk,
    },
    {
      id: 4,
      name: 'fisch',
      value: 'fish',
      image: fish,
    },
    {
      id: 5,
      name: 'apio',
      value: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soja',
      value: 'soy',
      image: soy,
    },
    {
      id: 7,
      name: 'sesam',
      value: 'sesame',
      image: sesame,
    },
    {
      id: 8,
      name: 'nüsse',
      value: 'nuts',
      image: nuts,
    },
    {
      id: 9,
      name: 'krebstiere',
      value: 'crustaceans',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'weichtiere',
      value: 'molluscs',
      image: molluscs,
    }
  ],
  fr: [
    {
      id: 1,
      name: 'gluten',
      value: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'oeufs',
      value: 'eggs',
      image: eggs,
    },
    {
      id: 3,
      name: 'lait',
      value: 'milk',
      image: milk,
    },
    {
      id: 4,
      name: 'poisson',
      value: 'fish',
      image: fish,
    },
    {
      id: 5,
      name: 'ail',
      value: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soja',
      value: 'soy',
      image: soy,
    },
    {
      id: 7,
      name: 'sesame',
      value: 'sesame',
      image: sesame,
    },
    {
      id: 8,
      name: 'noix',
      value: 'nuts',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustaceans',
      value: 'crustaceans',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'molusques',
      value: 'molluscs',
      image: molluscs,
    }
  ],
  it: [
    {
      id: 1,
      name: 'gluten',
      value: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'uova',
      value: 'eggs',
      image: eggs,
    },
    {
      id: 3,
      name: 'latte',
      value: 'milk',
      image: milk,
    },
    {
      id: 4,
      name: 'pesce',
      value: 'fish',
      image: fish,    
    },
    {
      id: 5,
      name: 'peperoncino',
      value: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soia',
      value: 'soy',
      image: soy,
    },
    {
      id: 7,
      name: 'sesamo',
      value: 'sesame',
      image: sesame,
    },
    {
      id: 8,
      name: 'noci',
      value: 'nuts',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustacei',
      value: 'crustaceans',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'moluschi',
      value: 'molluscs',
      image: molluscs,
    }
  ]
}