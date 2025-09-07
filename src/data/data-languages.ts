export interface Flag {
  id: string;
  name: string;
  locale: string;
  image: string;
}

export interface Language {
  id: string;
  name: string;
  selectLang: string;
  langChangedTo: string;
  taxInfo: string;
  suggestion: string;
  suggestionListEmpty: string;
  wishlistEmpty: string;
  defaultEmpty: string;
  home: string;
  about: string;
  contact: string;
  phone: string;
  schedule: string;
  socialMedia: string;
  returnToMenu: string;
  goBack: string;
  locale: string;
}

// IMAGES
import engFlag from '../assets/images/flags/eng-flag.png';
import spaFlag from '../assets/images/flags/spa-flag.webp';
import fraFlag from '../assets/images/flags/fra-flag.webp';
import gerFlag from '../assets/images/flags/ger-flag.png';
import itaFlag from '../assets/images/flags/ita-flag.webp';




export const flags: Record<string, Flag[]> = {
  es: [
    {
      id: '1',
      name: 'español',
      locale: 'es',
      image: spaFlag
    },
    {
      id: '2',
      name: 'ingles',
      locale: 'en',
      image: engFlag
    },
    {
      id: '3',
      name: 'aleman',
      locale: 'de',
      image: gerFlag
    },
    {
      id: '4',
      name: 'frances',
      locale: 'fr',
      image: fraFlag
    },
    {
      id: '5',
      name: 'italiano',
      locale: 'it',
      image: itaFlag
    }
  ],
  en: [
    {
      id: '1',
      name: 'spanish',
      locale: 'es',
      image: spaFlag
    },
    {
      id: '2',
      name: 'english',
      locale: 'en',
      image: engFlag
    },
    {
      id: '3',
      name: 'german',
      locale: 'de',
      image: gerFlag
    },
    {
      id: '4',
      name: 'french',
      locale: 'fr',
      image: fraFlag
    },
    {
      id: '5',
      name: 'italian',
      locale: 'it',
      image: itaFlag
    }
  ],
  de: [
    {
      id: '1',
      name: 'spanisch',
      locale: 'es',
      image: spaFlag
    },
    {
      id: '2',
      name: 'englisch',
      locale: 'en',
      image: engFlag
    },
    {
      id: '3',
      name: 'deutsch',
      locale: 'de',
      image: gerFlag
    },
    {
      id: '4',
      name: 'französisch',
      locale: 'fr',
      image: fraFlag
    },
    {
      id: '5',
      name: 'Italienisch',
      locale: 'it',
      image: itaFlag
    }
  ],
  fr: [
    {
      id: '1',
      name: 'espagnol',
      locale: 'es',
      image: spaFlag
    },
    {
      id: '2',
      name: 'anglais',
      locale: 'en',
      image: engFlag
    },
    {
      id: '3',
      name: 'allemand',
      locale: 'de',
      image: gerFlag
    },
    {
      id: '4',
      name: 'français',
      locale: 'fr',
      image: fraFlag
    },
    {
      id: '5',
      name: 'italien',
      locale: 'it',
      image: itaFlag
    }
  ],
  it: [
    {
      id: '1',
      name: 'spagnolo',
      locale: 'es',
      image: spaFlag
    },
    {
      id: '2',
      name: 'inglese',
      locale: 'en',
      image: engFlag
    },
    {
      id: '3',
      name: 'germano',
      locale: 'de',
      image: gerFlag
    },
    {
      id: '4',
      name: 'francese',
      locale: 'fr',
      image: fraFlag
    },
    {
      id: '5',
      name: 'italiano',
      locale: 'it',
      image: itaFlag
    }
  ]
}


export const languages: Record<string, Language> = {
  es: 
    {
      id: '1',
      name: 'español',
      selectLang: 'seleccione un idioma',
      langChangedTo: 'idioma cambiado a',
      taxInfo: 'impuestos no incluidos',
      suggestion: 'sugerencia',
      suggestionListEmpty: 'no se encontraron sugerencias',
      wishlistEmpty: 'tu lista de deseos está vacía',
      defaultEmpty: 'no se encontraron entradas',
      home: 'inicio',
      about: 'quienes somos',
      contact: 'contacto',
      phone: 'teléfono',
      schedule: 'horarios',
      socialMedia: 'redes sociales',
      returnToMenu: 'regresar al menú',
      goBack: 'volver',
      locale: 'es',
    },
  en:
    {
      id: '2',
      name: 'english',
      selectLang: 'select a language',
      langChangedTo: 'language changed to',
      taxInfo: 'taxes not included',
      suggestion: 'suggestion',
      suggestionListEmpty: 'no suggestions found',
      wishlistEmpty: 'your wishlist is empty',
      defaultEmpty: 'no items found',
      home: 'home',
      about: 'about us',
      contact: 'contact',
      phone: 'phone',
      schedule: 'timetables',
      socialMedia: 'social media',
      returnToMenu: 'return to menu',
      goBack: 'go back',
      locale: 'en',
    },
  de:
    {
      id: '3',
      name: 'deutsch',
      selectLang: 'wählen sie eine sprache',
      langChangedTo: 'sprache geændert zu',
      taxInfo: 'steuern nicht enthalten',
      suggestion: 'vorschlag',
      suggestionListEmpty: 'keine Vorschlag gefunden',
      wishlistEmpty: 'ihre Wunschliste ist leer',
      defaultEmpty: 'keine Einträge gefunden',
      home: 'zuhause',
      about: 'wer sind wir',
      contact: 'kontakt',
      phone: 'telefon',
      schedule: 'fahrpläne',
      socialMedia: 'soziale medien',
      returnToMenu: 'zurück zum Menü',
      goBack: 'geh zurück',
      locale: 'de',
    },
  fr:
    {
      id: '4',
      name: 'français',
      selectLang: 'sélectionnez une langue',
      langChangedTo: 'langue changée en',
      taxInfo: 'taxes non incluses',
      suggestion: 'suggestion',
      suggestionListEmpty: 'aucune suggestion trouvée',
      wishlistEmpty: 'votre liste de souhaits est vide',
      defaultEmpty: 'aucune entrée trouvée',
      home: 'maison',
      about: 'qui sommes-nous',
      contact: 'contact',
      phone: 'téléphone',
      schedule: "horaires",
      socialMedia: 'médias sociaux',
      returnToMenu: 'retour au menu',
      goBack: 'retour',
      locale: 'fr',
    },
  it:
    {
      id: '5',
      name: 'italiano',
      selectLang: 'seleziona una lingua',
      langChangedTo: 'lingua cambiata in',
      taxInfo: 'tasse non incluse',
      suggestion: 'suggerimento',
      suggestionListEmpty: 'nessuna suggerimento trovata',
      wishlistEmpty: 'la tua lista dei desideri è vuota',
      defaultEmpty: 'nessun elemento trovato',
      home: 'inizio',
      about: 'chi siamo',
      contact: 'contatto',
      phone: 'telefono',
      schedule: 'orari',
      socialMedia: 'media sociali',
      returnToMenu: 'torna al menu',
      goBack: 'torna indietro',
      locale: 'it',
    }
};