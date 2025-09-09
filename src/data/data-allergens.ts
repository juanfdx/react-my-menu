export interface Allergen {
  id: number;
  name: string;
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
      image: gluten,
    },
    {
      id: 2,
      name: 'huevos',
      image: eggs,
    },
    {
      id: 3,
      name: 'leche',
      image: milk,
    },
    {
      id: 4,
      name: 'pescado',
      image: fish,
    },
    {
      id: 5,
      name: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soya',
      image: soy,
    },
    {
      id: 7,
      name: 'sesamo',
      image: sesame,
    },
    {
      id: 8,
      name: 'nueces',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustaceos',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'moluscos',
      image: molluscs,
    },
  ],
  en: [
    {
      id: 1,
      name: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'eggs',
      image: eggs,
    },
    {
      id: 3,
      name: 'milk',
      image: milk,
    },
    {
      id: 4,
      name: 'fish',
      image: fish,
    },
    {
      id: 5,
      name: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soy',
      image: soy,
    },
    {
      id: 7,
      name: 'sesame',
      image: sesame,
    },
    {
      id: 8,
      name: 'nuts',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustaceans',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'molluscs',
      image: molluscs,
    }
  ],
  de: [
    {
      id: 1,
      name: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'eier',
      image: eggs,
    },
    {
      id: 3,
      name: 'milch',
      image: milk,
    },
    {
      id: 4,
      name: 'fisch',
      image: fish,
    },
    {
      id: 5,
      name: 'apio',
      image: apio,
    },
    {
      id: 6,
      name: 'soja',
      image: soy,
    },
    {
      id: 7,
      name: 'sesam',
      image: sesame,
    },
    {
      id: 8,
      name: 'nüsse',
      image: nuts,
    },
    {
      id: 9,
      name: 'krebstiere',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'weichtiere',
      image: molluscs,
    }
  ],
  fr: [
    {
      id: 1,
      name: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'oeufs',
      image: eggs,
    },
    {
      id: 3,
      name: 'lait',
      image: milk,
    },
    {
      id: 4,
      name: 'poisson',
      image: fish,
    },
    {
      id: 5,
      name: 'ail',
      image: apio,
    },
    {
      id: 6,
      name: 'soja',
      image: soy,
    },
    {
      id: 7,
      name: 'sesame',
      image: sesame,
    },
    {
      id: 8,
      name: 'noix',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustaceans',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'molusques',
      image: molluscs,
    }
  ],
  it: [
    {
      id: 1,
      name: 'gluten',
      image: gluten,
    },
    {
      id: 2,
      name: 'uova',
      image: eggs,
    },
    {
      id: 3,
      name: 'latte',
      image: milk,
    },
    {
      id: 4,
      name: 'pesce',
      image: fish,    
    },
    {
      id: 5,
      name: 'peperoncino',
      image: apio,
    },
    {
      id: 6,
      name: 'soia',
      image: soy,
    },
    {
      id: 7,
      name: 'sesamo',
      image: sesame,
    },
    {
      id: 8,
      name: 'noci',
      image: nuts,
    },
    {
      id: 9,
      name: 'crustacei',
      image: crustaceans,
    },
    {
      id: 10,
      name: 'moluschi',
      image: molluscs,
    }
  ]
}