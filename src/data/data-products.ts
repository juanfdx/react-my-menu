import type { Product } from '../modules/products/interfaces/product.interface'
// IMAGES
import thumbGrilledPork from '../assets/images/products/pork/thumbnails/thumb-grilled-pork.webp'
import grilledPork from '../assets/images/products/pork/grilled-pork.webp'
import thumbTaquitosPork from '../assets/images/products/pork/thumbnails/thumb-taquitos-pork.webp'
import taquitosPork from '../assets/images/products/pork/taquitos-pork.webp'
import thumbChickenStrips from '../assets/images/products/poultry/thumbnails/thumb-chicken-strips.webp'
import chickenStrips from '../assets/images/products/poultry/chicken-strips.webp'
import thumbMiniChicken from '../assets/images/products/poultry/thumbnails/thumb-mini-chicken.webp'
import miniChicken from '../assets/images/products/poultry/mini-chicken.webp'
import thumbChickenWings from '../assets/images/products/poultry/thumbnails/thumb-chicken-wings.webp'
import chickenWings from '../assets/images/products/poultry/chicken-wings.webp'
import thumbBatteredSquid from '../assets/images/products/seafood/thumbnails/thumb-battered-squid.webp'
import batteredSquid from '../assets/images/products/seafood/battered-squid.webp'
import thumbShrimpPancakes from '../assets/images/products/seafood/thumbnails/thumb-shrimp-pancakes.webp'
import shrimpPancakes from '../assets/images/products/seafood/shrimp-pancakes.webp'
import thumbSquidSprigs from '../assets/images/products/seafood/thumbnails/thumb-squid-sprigs.webp'
import squidSprigs from '../assets/images/products/seafood/squid-sprigs.webp'
import thumbMadridStyleTripe from '../assets/images/products/beef/thumbnails/thumb-madrid-style-tripe.webp'
import madridStyleTripe from '../assets/images/products/beef/madrid-style-tripe.webp'
import thumbMeatloaf from '../assets/images/products/beef/thumbnails/thumb-meatloaf.webp'
import meatloaf from '../assets/images/products/beef/meatloaf.webp'
import thumbVealInSauce from '../assets/images/products/beef/thumbnails/thumb-veal-in-sauce.webp'
import vealInSauce from '../assets/images/products/beef/veal-in-sauce.webp'
import thumbBolognese from '../assets/images/products/pasta/thumbnails/thumb-bolognese.webp'
import bolognese from '../assets/images/products/pasta/bolognese.webp'
import thumbCarbonara from '../assets/images/products/pasta/thumbnails/thumb-carbonara.webp'
import carbonara from '../assets/images/products/pasta/carbonara.webp'
import thumbPesto from '../assets/images/products/pasta/thumbnails/thumb-pesto.webp'
import pesto from '../assets/images/products/pasta/pesto.webp'
import thumbCheesecake from '../assets/images/products/desserts/thumbnails/thumb-cheesecake.webp'
import cheesecake from '../assets/images/products/desserts/cheesecake.webp'
import thumbChocolateCake from '../assets/images/products/desserts/thumbnails/thumb-chocolate-cake.webp'
import chocolateCake from '../assets/images/products/desserts/chocolate-cake.webp'
import thumbCaramelCake from '../assets/images/products/desserts/thumbnails/thumb-caramel-cake.webp'
import caramelCake from '../assets/images/products/desserts/caramel-cake.webp'
import thumbIceCream from '../assets/images/products/desserts/thumbnails/thumb-ice-cream.webp'
import iceCream from '../assets/images/products/desserts/ice-cream.webp'
import thumbWatercressSalad from '../assets/images/products/salads/thumbnails/thumb-watercress-salad.webp'
import watercressSalad from '../assets/images/products/salads/watercress-salad.webp'
import thumbTomatoSalad from '../assets/images/products/salads/thumbnails/thumb-tomato-salad.webp'
import tomatoSalad from '../assets/images/products/salads/tomato-salad.webp'
import thumbTunaSalad from '../assets/images/products/salads/thumbnails/thumb-tuna-salad.webp'
import tunaSalad from '../assets/images/products/salads/tuna-salad.webp'




// ALLERGENS
// import apio from '../assets/images/allergens/apio.png'
import gluten from '../assets/images/allergens/gluten.png'
import eggs from '../assets/images/allergens/eggs.png'
import milk from '../assets/images/allergens/milk.png'
import fish from '../assets/images/allergens/fish.png'
import soy from '../assets/images/allergens/soy.png'
import sesame from '../assets/images/allergens/sesame.png'
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
    active: true,
    suggested: true
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
  },
  {
    id: 7,
    name: 'shrimp pancakes',
    description: '4 crispy units',
    category: 'seafood',
    price: 12.5,
    thumbnail: thumbShrimpPancakes,
    image: shrimpPancakes,
    rating: 4,
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
    active: true,
    suggested: false
  },
  {
    id: 8,
    name: 'squid sprigs',
    description: 'crispy on the outside and juicy on the inside',
    category: 'seafood',
    price: 13.5,
    thumbnail: thumbSquidSprigs,
    image: squidSprigs,
    rating: 5,
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
    active: true,
    suggested: true
  },
  {
    id: 9,
    name: 'madrid style tripe',
    description: 'homemade tripe a la madrileña. You will wet bread',
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
  },
  {
    id: 13,
    name: 'carbonara',
    description: 'spaghetti or tagliatelle with homemade carbonara sauce with bacon',
    category: 'pasta',
    price: 8.5,
    thumbnail: thumbCarbonara,
    image: carbonara,
    rating: 3,
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
    active: true,
    suggested: false
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
    active: true,
    suggested: false
  },
  {
    id: 15,
    name: 'cheesecake',
    description: 'with berry syrup',
    category: 'desserts',
    price: 5.5,
    thumbnail: thumbCheesecake,
    image: cheesecake,
    rating: 5,
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
    active: true,
    suggested: false
  },
  {
    id: 16,
    name: 'chocolate cake',
    description: "chocolate cake, chocolate cream, chocolate shavings and chocolate syrup... The only thing that isn't chocolate is the plate",
    category: 'desserts',
    price: 5.5,
    thumbnail: thumbChocolateCake,
    image: chocolateCake,
    rating: 4,
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
      id: 7,
      name: 'sesame',
      image: sesame,
      locale: 'en',
    },
    ],
    locale: 'en',
    active: true,
    suggested: true
  },
  {
    id: 17,
    name: 'caramel cake',
    description: 'With caramel syrup',
    category: 'desserts',
    price: 5.5,
    thumbnail: thumbCaramelCake,
    image: caramelCake,
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
      id: 7,
      name: 'sesame',
      image: sesame,
      locale: 'en',
    },
    ],
    locale: 'en',
    active: true,
    suggested: false
  },
  {
    id: 18,
    name: 'ice creams',
    description: 'Combine two scoops and syrup as desired.\n Ice creams: chocolate, strawberry, vanilla, and tiramisu\n Syrups: caramel, chocolate, and berries',
    category: 'desserts',
    price: 4.5,
    thumbnail: thumbIceCream,
    image: iceCream,
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
    ],
    locale: 'en',
    active: true,
    suggested: false
  },
  {
    id: 19,
    name: 'house watercress salad',
    description: 'watercress and goat cheese salad',
    category: 'salads',
    price: 12,
    thumbnail: thumbWatercressSalad,
    image: watercressSalad,
    rating: 0,
    allergens: [
      {
        id: 3,
        name: 'milk',
        image: milk,
        locale: 'en',
      },
    ],
    locale: 'en',
    active: true,
    suggested: false
  },
  {
    id: 20,
    name: 'tomato salad',
    description: 'warm tomato salad with olive oil',
    category: 'salads',
    price: 9,
    thumbnail: thumbTomatoSalad,
    image: tomatoSalad,
    rating: 0,
    allergens: [],
    locale: 'en',
    active: true,
    suggested: false
  },
  {
    id: 21,
    name: 'tuna salad',
    description: 'tuna salad',
    category: 'salads',
    price: 20,
    thumbnail: thumbTunaSalad,
    image: tunaSalad,
    rating: 0,
    allergens: [],
    locale: 'en',
    active: true,
    suggested: false
  },
]