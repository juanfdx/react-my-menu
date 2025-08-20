
export interface FooterLinks {
  id: string;
  langId: string;
  name: string;
  icon: string;
  link: string;
  iconClass: string;
  locale: string;
}



export const footerLinks: FooterLinks[] = [
  { 
    id: '1',
    langId: '1',
    name: 'menu', 
    icon: 'fork-knife',
    link: '/',
    iconClass: 'footer__icon-fk',
    locale: 'en' 
  },
  { 
    id: '2',
    langId: '2',
    name: 'wishlist',
    icon: 'heart', 
    link: '/wishlist', 
    iconClass: 'footer__icon-heart',
    locale: 'en' 
  },
  { 
    id: '3',
    langId: '3',
    name: 'suggestions', 
    icon: 'star',
    link: '/suggestions', 
    iconClass: 'footer__icon-star',
    locale: 'en'
  },
    { 
    id: '4',
    langId: '1',
    name: 'menu', 
    icon: 'fork-knife',
    link: '/',
    iconClass: 'footer__icon-fk',
    locale: 'es' 
  },
  { 
    id: '5',
    langId: '2',
    name: 'Lista de deseos', 
    icon: 'heart',
    link: '/wishlist', 
    iconClass: 'footer__icon-heart',
    locale: 'es' 
  },
  { 
    id: '6',
    langId: '3',
    name: 'sugerencias', 
    icon: 'star',
    link: '/suggestions', 
    iconClass: 'footer__icon-star',
    locale: 'es'
  },
  { 
    id: '7',
    langId: '1',
    name: 'Speisekarte', 
    icon: 'fork-knife',
    link: '/',
    iconClass: 'footer__icon-fk',
    locale: 'de' 
  },
  { 
    id: '8',
    langId: '2',
    name: 'Wunschliste', 
    icon: 'heart',
    link: '/wishlist', 
    iconClass: 'footer__icon-heart',
    locale: 'de' 
  },
  { 
    id: '9',
    langId: '3',
    name: 'Vorschläge', 
    icon: 'star',
    link: '/suggestions', 
    iconClass: 'footer__icon-star',
    locale: 'de'
  },
  { 
    id: '10',
    langId: '1',
    name: 'menu', 
    icon: 'fork-knife',
    link: '/',
    iconClass: 'footer__icon-fk',
    locale: 'fr' 
  },
  { 
    id: '11',
    langId: '2',
    name: 'liste de souhaits', 
    icon: 'heart',
    link: '/wishlist', 
    iconClass: 'footer__icon-heart',
    locale: 'fr' 
  },
  { 
    id: '12',
    langId: '3',
    name: 'suggestions', 
    icon: 'star',
    link: '/suggestions', 
    iconClass: 'footer__icon-star',
    locale: 'fr'
  },
    { 
    id: '13',
    langId: '1',
    name: 'menu', 
    icon: 'fork-knife',
    link: '/',
    iconClass: 'footer__icon-fk',
    locale: 'it' 
  },
  { 
    id: '14',
    langId: '2',
    name: 'lista dei desideri', 
    icon: 'heart',
    link: '/wishlist', 
    iconClass: 'footer__icon-heart',
    locale: 'it' 
  },
  { 
    id: '15',
    langId: '3',
    name: 'suggerimenti', 
    icon: 'star',
    link: '/suggestions', 
    iconClass: 'footer__icon-star',
    locale: 'it'
  },


]