import type { Product } from '../interfaces/product.interface';
import thumbGrilledPork from '../assets/images/products/pork/thumbnails/thumb-grilled-pork.jpg'
import grilledPork from '../assets/images/products/pork/grilled-pork.jpg'
import thumbTaquitosPork from '../assets/images/products/pork/thumbnails/thumb-grilled-pork.jpg'
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
        image: 'gluten.png',
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: 'crustaceans.png',
        locale: 'en',
      },
      {
        id: 2,
        name: 'eggs',
        image: 'eggs.png',
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: 'fish.png',
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: 'soy.png',
        locale: 'en',
      },
      {
        id: 3,
        name: 'milk',
        image: 'milk.png',
        locale: 'en',
      },
      
    ],
    locale: 'en',
    active: true
  },
  {
    id: 2,
    name: 'taquitos de Pincho Moruno',
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
        image: 'gluten.png',
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: 'crustaceans.png',
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: 'fish.png',
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: 'soy.png',
        locale: 'en',
      }
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
        image: 'crustaceans.png',
        locale: 'en',
      },
      {
        id: 4,
        name: 'fish',
        image: 'fish.png',
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: 'soy.png',
        locale: 'en',
      }
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
        image: 'gluten.png',
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: 'soy.png',
        locale: 'en',
      },
      {
        id: 10,
        name: 'molluscs',
        image: 'molluscs.png',
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
        image: 'gluten.png',
        locale: 'en',
      },
      {
        id: 9,
        name: 'crustaceans',
        image: 'crustaceans.png',
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
        image: 'gluten.png',
        locale: 'en',
      },
      {
        id: 2,
        name: 'eggs',
        image: 'eggs.png',
        locale: 'en',
      },
      {
        id: 6,
        name: 'soy',
        image: 'soy.png',
        locale: 'en',
      },
      {
        id: 8,
        name: 'nuts',
        image: 'nuts.png',
        locale: 'en',
      },
      {
        id: 10,
        name: 'molluscs',
        image: 'molluscs.png',
        locale: 'en',
      }
    ],
    locale: 'en',
    active: true
  },

]