import type { Product } from '../modules/products/interfaces/product.interface'
// IMAGES
import thumbGrilledPork from '../assets/images/products/pork/thumbnails/thumb-grilled-pork.jpg'
import grilledPork from '../assets/images/products/pork/grilled-pork.jpg'
import thumbTaquitosPork from '../assets/images/products/pork/thumbnails/thumb-taquitos-pork.jpg'
import taquitosPork from '../assets/images/products/pork/taquitos-pork.jpg'
import thumbChickenStrips from '../assets/images/products/poultry/thumbnails/thumb-chicken-strips.jpg'
import chickenStrips from '../assets/images/products/poultry/chicken-strips.jpg'
import thumbMiniChicken from '../assets/images/products/poultry/thumbnails/thumb-mini-chicken.jpg'
import miniChicken from '../assets/images/products/poultry/mini-chicken.jpg'
import thumbChickenWings from '../assets/images/products/poultry/thumbnails/thumb-chicken-wings.jpg'
import chickenWings from '../assets/images/products/poultry/chicken-wings.jpg'
import thumbBatteredSquid from '../assets/images/products/seafood/thumbnails/thumb-battered-squid .jpg'
import batteredSquid from '../assets/images/products/seafood/battered-squid .jpg'
import thumbShrimpPancakes from '../assets/images/products/seafood/thumbnails/thumb-shrimp-pancakes.jpg'
import shrimpPancakes from '../assets/images/products/seafood/shrimp-pancakes.jpg'
import thumbSquidSprigs from '../assets/images/products/seafood/thumbnails/thumb-squid-sprigs.jpg'
import squidSprigs from '../assets/images/products/seafood/squid-sprigs.jpg'
import thumbMadridStyleTripe from '../assets/images/products/beef/thumbnails/thumb-madrid-style-tripe.jpg'
import madridStyleTripe from '../assets/images/products/beef/madrid-style-tripe.jpg'
import thumbMeatloaf from '../assets/images/products/beef/thumbnails/thumb-meatloaf.jpg'
import meatloaf from '../assets/images/products/beef/meatloaf.jpg'
import thumbVealInSauce from '../assets/images/products/beef/thumbnails/thumb-veal-in-sauce.jpg'
import vealInSauce from '../assets/images/products/beef/veal-in-sauce.jpg'
import thumbBolognese from '../assets/images/products/pasta/thumbnails/thumb-bolognese.jpg'
import bolognese from '../assets/images/products/pasta/bolognese.jpg'
import thumbCarbonara from '../assets/images/products/pasta/thumbnails/thumb-carbonara.jpg'
import carbonara from '../assets/images/products/pasta/carbonara.jpg'
import thumbPesto from '../assets/images/products/pasta/thumbnails/thumb-pesto.jpg'
import pesto from '../assets/images/products/pasta/pesto.jpg'

// ALLERGENS
// import apio from '../assets/images/allergens/apio.png'
import gluten from '../assets/images/allergens/gluten.png'
import eggs from '../assets/images/allergens/eggs.png'
import milk from '../assets/images/allergens/milk.png'
import fish from '../assets/images/allergens/fish.png'
import soy from '../assets/images/allergens/soy.png'
// import sesame from '../assets/images/allergens/sesame.png'
import nuts from '../assets/images/allergens/nuts.png'
import crustaceans from '../assets/images/allergens/crustaceans.png'
import molluscs from '../assets/images/allergens/molluscs.png'







export const products: Product[] = [
  {
    id: 1,
    name: 'grilled pork tenderloin and pepper sauce',
    description: 'pork fillet fillet and served with baked potatoes and sautéed boletus. With green pepper sauce',
    category: 'pork',
    price: 13.5,
    thumbnail: thumbGrilledPork,
    image: grilledPork,
    rating: 0,
    allergens: [
      {
        id: 1,
        name: 'gluten',
        image: gluten,
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },
      {
        id: 2,
        name: 'eggs',
        image: eggs,
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: fish,
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      },
      {
        id: 3,
        name: 'milk',
        image: milk,
        locale: 'en',
      },
      
    ],
    locale: 'en',
    active: true
  },
  {
    id: 2,
    name: 'taquitos de pincho moruno',
    description: 'marinated lean pork accompanied with fried potatoes and padrón peppers',
    category: 'pork',
    price: 10.2,
    thumbnail: thumbTaquitosPork,
    image: taquitosPork,
    rating: 0,
    allergens:[],
    locale: 'en',
    active: true
  },
  {
    id: 3,
    name: 'breaded chicken strips',
    description: 'chicken breast strips, battered with a touch of parsley, accompanied by honey mustard sauce',
    category: 'poultry',
    price: 8.9,
    thumbnail: thumbChickenStrips,
    image: chickenStrips,
    rating: 0,
    allergens: [
      {
        id: 1,
        name: 'gluten',
        image: gluten,
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: fish,
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      },
    ],
    locale: 'en',
    active: true
  },
  {
    id: 4,
    name: 'mini chicken drumsticks',
    description: 'fried chicken drumsticks, very tasty since we previously marinate them for several days with spices and olive oil. Accompanied by aioli sauce, and on a bed of bakery potatoes',
    category: 'poultry',
    price: 10.5,
    thumbnail: thumbMiniChicken,
    image: miniChicken,
    rating: 0,
    allergens: [
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: fish,
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      },
    ],
    locale: 'en',
    active: true
  },
  {
    id: 5,
    name: 'marinated chicken wings',
    description: 'chicken wings marinated with paprika, garlic, salt and oregano. Accompanied by barbecue sauce',
    category: 'poultry',
    price: 10.5,
    thumbnail: thumbChickenWings,
    image: chickenWings,
    rating: 0,
    allergens: [],
    locale: 'en',
    active: true
  },
  {
    id: 6,
    name: 'battered squid strips',
    description: 'tender squid strips accompanied by alioli',
    category: 'seafood',
    price: 14.5,
    thumbnail: thumbBatteredSquid,
    image: batteredSquid,
    rating: 0,
    allergens: [
      {
        id: 1,
        name: 'gluten',
        image: gluten,
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      },
      {
        id: 10,
        name: 'molluscs',
        image: molluscs,
        locale: 'en',
      }
      
    ],
    locale: 'en',
    active: true
  },
  {
    id: 7,
    name: 'shrimp pancakes',
    description: '4 crispy units',
    category: 'seafood',
    price: 12.5,
    thumbnail: thumbShrimpPancakes,
    image: shrimpPancakes,
    rating: 0,
    allergens: [
      {
        id: 1,
        name: 'gluten',
        image: gluten,
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },
    ],
    locale: 'en',
    active: true
  },
  {
    id: 8,
    name: 'squid sprigs',
    description: 'crispy on the outside and juicy on the inside',
    category: 'seafood',
    price: 13.5,
    thumbnail: thumbSquidSprigs,
    image: squidSprigs,
    rating: 0,
    allergens: [
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
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      },
      {
        id: 8,
        name: 'nuts',
        image: nuts,
        locale: 'en',
      },
      {
        id: 10,
        name: 'molluscs',
        image: molluscs,
        locale: 'en',
      }
    ],
    locale: 'en',
    active: true
  },
  {
    id: 9,
    name: 'madrid style tripe',
    description: 'homemade tripe a la madrileña. You will wet bread!!',
    category: 'beef',
    price: 14.5,
    thumbnail: thumbMadridStyleTripe,
    image: madridStyleTripe,
    rating: 0,
    allergens: [
      {
        id: 1,
        name: 'gluten',
        image: gluten,
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: fish,
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },

    ],
    locale: 'en',
    active: true
  },
  {
    id: 10,
    name: 'meatloaf',
    description: 'homemade beef meatballs in sauce, with french fries',
    category: 'beef',
    price: 13.5,
    thumbnail: thumbMeatloaf,
    image: meatloaf,
    rating: 0,
    allergens: [
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
        id: 4,
        name: 'fish',
        image: fish,
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },

    ],
    locale: 'en',
    active: true
  },
  {
    id: 11,
    name: 'veal in sauce',
    description: 'braised beef with our delicious sauce',
    category: 'beef',
    price: 13.5,
    thumbnail: thumbVealInSauce,
    image: vealInSauce,
    rating: 0,
    allergens: [
      {
        id: 1,
        name: 'gluten',
        image: gluten,
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: fish,
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      }, 
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },

    ],
    locale: 'en',
    active: true
  },
  {
    id: 12,
    name: 'bolognese',
    description: 'spaghetti or tagliatelle with homemade bolognese sauce',
    category: 'pasta',
    price: 8.5,
    thumbnail: thumbBolognese,
    image: bolognese,
    rating: 0,
    allergens: [
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
        id: 6,
        name: 'soy',
        image: soy,
        locale: 'en',
      }, 
      {
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },

    ],
    locale: 'en',
    active: true
  },
  {
    id: 13,
    name: 'carbonara',
    description: 'spaghetti or tagliatelle with homemade carbonara sauce with bacon',
    category: 'pasta',
    price: 8.5,
    thumbnail: thumbCarbonara,
    image: carbonara,
    rating: 0,
    allergens: [
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
      }
    ],
    locale: 'en',
    active: true
  },
  {
    id: 14,
    name: 'pesto',
    description: 'spaghetti or tagliatelle with homemade pesto sauce',
    category: 'pasta',
    price: 8.5,
    thumbnail: thumbPesto,
    image: pesto,
    rating: 0,
    allergens: [
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
        id: 9,
        name: 'crustaceans',
        image: crustaceans,
        locale: 'en',
      },

    ],
    locale: 'en',
    active: true
  },
]