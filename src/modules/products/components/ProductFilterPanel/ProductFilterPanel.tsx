import './ProductFilterPanel.css';
import { useRef, useState } from 'react';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// COMPONENTS
import { Icon } from '../../../../shared/components/Icon/Icon';
import { SearchInput } from '../SearchInput/SearchInput';
import { AllergenCheckbox } from '../AllergenCheckbox/AllergenCheckbox';
import { PriceRadio } from '../PriceRadio/PriceRadio';
import { ToggleButton } from '../../../../shared/components/ToggleButton/ToggleButton';
// DATA
import { allergens } from '../../../../data/data-allergens';
import { priceRange } from '../../../../data/data-price-range';
import { filtersPanelByLocale } from '../../../../data/data-filters-lang';



export const ProductFilterPanel = () => {

  const mostPopular     = useMenuStore((state) => state.menu.mostPopular);
  const setMostPopular  = useMenuStore((state) => state.setMostPopular);
  const mySearchTerm    = useMenuStore((state) => state.menu.searchTerm);
  const setMySearchTerm = useMenuStore((state) => state.setSearchTerm);
  const myMaxPrice     = useMenuStore((state) => state.menu.maxPrice);
  const setMyMaxPrice  = useMenuStore((state) => state.setMaxPrice);
  const myAllergens    = useMenuStore((state) => state.menu.allergens);
  const setMyAllergens = useMenuStore((state) => state.setAllergens);

  const myLanguage     = useMenuStore((state) => state.menu.language);
  const panel = filtersPanelByLocale[myLanguage];

  const [accordion1, setAccordion1] = useState<boolean>(false);
  const [accordion2, setAccordion2] = useState<boolean>(false);  
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);




  const handleToggleAllergen = (allergen: string) => {
    if (myAllergens.includes(allergen)) {
      setMyAllergens(myAllergens.filter(a => a !== allergen));
    } else {
      setMyAllergens([...myAllergens, allergen]);
    }
  };


  
  return (
    <section className='product-filter-panel'>
      <div className='product-filter-panel__container'>

        <div className='product-filter-panel__controls'>
          {/* search */}
          <SearchInput 
            searchTerm={mySearchTerm} 
            setSearchTerm={setMySearchTerm} 
            placeholder={panel.placeholder} 
          />

          {/* filters */}
          <button className='product-filter-panel__button' onClick={() => setAccordion1(!accordion1)}>
            <Icon type='allergen' className='product-filter-panel__button-icon' />
            <span className='product-filter-panel__button-text'>{panel.sort1}</span>
          </button>
          <button className='product-filter-panel__button' onClick={() => setAccordion2(!accordion2)}>
            <Icon type='view' className='product-filter-panel__button-icon'/>
            <span className='product-filter-panel__button-text'>{panel.sort2} </span>
          </button>
        </div>

        {/* accordions */}
        <div className='product-filter-panel__accordions'>
          
          {/* allergens filter */}
          <div
            ref={contentRef1} 
            className='product-filter-panel__list-wrapper'
            style={{
              maxHeight: accordion1 ? `${contentRef1.current?.scrollHeight}px` : '0px',
          }}
          >
            <h5 className='product-filter-panel__allergens-title'>{panel.allergens}</h5>
            
            <ul className='product-filter-panel__allergens-list'>
              {allergens?.map((allergen) => (
                <li key={allergen.id} className='product-filter-panel__allergens-item'>
                  <AllergenCheckbox 
                    img={allergen.image} 
                    allergen={allergen.name}
                    selectedAllergens={myAllergens}
                    handleInputChange={handleToggleAllergen} 
                  />
                </li>      
              ))}

              <li className='product-filter-panel__allergens-item'>
                <button 
                  className='product-filter-panel__reset-btn'
                  onClick={() => setMyAllergens([])}
                >
                  Clear
                </button>
              </li>
            </ul>

          </div>
          
          {/* price filter */}
          <div
            ref={contentRef2} 
            className='product-filter-panel__list-wrapper'
            style={{
              maxHeight: accordion2 ? `${contentRef2.current?.scrollHeight}px` : '0px',
          }}
          >
            <h5 className='product-filter-panel__filters-title'>{panel.price}</h5>

            <ul className='product-filter-panel__price-list'>
              {priceRange.map((price) => (
                <li key={price} className='product-filter-panel__price-item'>
                  <PriceRadio 
                    price={price} 
                    selectedPrice={myMaxPrice} 
                    handlePriceChange={setMyMaxPrice} 
                  />
                </li>      
              ))}

              <li className='product-filter-panel__price-item'>
                <PriceRadio 
                  price={0} 
                  selectedPrice={myMaxPrice} 
                  handlePriceChange={setMyMaxPrice} 
                />
              </li>
            </ul>

          </div>

          {/* most popular */}
          <div
            ref={contentRef3} 
            className='product-filter-panel__list-wrapper'
            style={{
              maxHeight: accordion2 ? `${contentRef3.current?.scrollHeight}px` : '0px',
          }}
          >
            <h5 className='product-filter-panel__most-popular-title'>{panel.mostPopular}</h5>

            <ToggleButton mostPopular={mostPopular} setMostPopular={setMostPopular}  />

          </div>

        </div>
      </div>
    </section>
  )
}