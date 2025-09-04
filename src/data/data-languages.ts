export interface Flag {
  id: string;
  name: string;
  locale: string;
  image: string;
}

export interface Language {
  id: string;
  name: string;
  title1: string;
  taxInfo: string;
  suggestion: string;
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
      title1: 'seleccione un idioma',
      taxInfo: 'impuestos no incluidos',
      suggestion: 'sugerencia',
      locale: 'es',
    },
  en:
    {
      id: '2',
      name: 'english',
      title1: 'select a language',
      taxInfo: 'taxes not included',
      suggestion: 'suggestion',
      locale: 'en',
    },
  de:
    {
      id: '3',
      name: 'deutsch',
      title1: 'wählen sie eine sprache',
      taxInfo: 'steuern nicht enthalten',
      suggestion: 'vorschlag',
      locale: 'de',
    },
  fr:
    {
      id: '4',
      name: 'français',
      title1: 'sélectionnez une langue',
      taxInfo: 'taxes non incluses',
      suggestion: 'suggestion',
      locale: 'fr',
    },
  it:
    {
      id: '5',
      name: 'italiano',
      title1: 'seleziona una lingua',
      taxInfo: 'tasse non incluse',
      suggestion: 'suggerimento',
      locale: 'it',
    }
};