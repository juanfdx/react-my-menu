
export interface FilterPanel {
  id: string;
  placeholder: string;
  sort1: string;
  sort2: string;
  allergens: string;
  viewMode: string;
  price: string;
  mostPopular: string;
}


export const filtersPanelByLocale: Record<string, FilterPanel> = {
  es: {
    id: '1',
    placeholder: 'Buscar',
    sort1: 'Ordenar por Alérgeno',
    sort2: 'Ordenar por',
    allergens: 'Alérgenos',
    viewMode: 'Modo de vista',
    price: 'Precio',
    mostPopular: 'Los mas populares',
  },
  en: {
    id: '2',
    placeholder: 'Search',
    sort1: 'Sort by Allergen',
    sort2: 'Sort by',
    allergens: 'Allergens',
    viewMode: 'View mode',
    price: 'Price',
    mostPopular: 'Most popular',
  },
  de: {
    id: '3',
    placeholder: 'Suchen',
    sort1: 'Sortieren nach Allergeno',
    sort2: 'Sortieren nach',
    allergens: 'Allergene',
    viewMode: 'Ansicht',
    price: 'Preis',
    mostPopular: 'Am beliebtesten',
  },
  fr: {
    id: '4',
    placeholder: 'Chercher',
    sort1: 'Trier par Allergènes',
    sort2: 'Trier par',
    allergens: 'Allergènes',
    viewMode: 'Mode de vue',
    price: 'Prix',
    mostPopular: 'Les plus populaires',
  },
  it: {
    id: '5',
    placeholder: 'Cercare',
    sort1: 'Ordina per Allergeni',
    sort2: 'Ordina per',
    allergens: 'Allergeni',
    viewMode: 'Modalità di visualizzazione',
    price: 'Prezzo',
    mostPopular: 'I più popolari',
  },
};
