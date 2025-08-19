import './ProductFilterPanel.css';
import { useRef, useState } from 'react';
// STORE
import { useMenuStore } from '../../../../stores/useMenuStore';
// COMPONENTS
import { Icon } from '../../../../shared/components/Icon/Icon';
import { AllergenCheckbox } from '../AllergenCheckbox/AllergenCheckbox';
// DATA
import { allergens } from '../../../../data/data-allergens';
import { priceRange } from '../../../../data/data-price-range';
import { PriceRadio } from '../PriceRadio/PriceRadio';
import { SearchInput } from '../SearchInput/SearchInput';




export const ProductFilterPanel = () => {

  const mySearchTerm   = useMenuStore((state) => state.menu.searchTerm);
  const setMySearchTerm = useMenuStore((state) => state.setSearchTerm);
  const myMaxPrice     = useMenuStore((state) => state.menu.maxPrice);
  const setMyMaxPrice  = useMenuStore((state) => state.setMaxPrice);
  const myAllergens    = useMenuStore((state) => state.menu.allergens);
  const setMyAllergens = useMenuStore((state) => state.setAllergens);

  const [accordion1, setAccordion1] = useState<boolean>(false);
  const [accordion2, setAccordion2] = useState<boolean>(false);  
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);


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
          <SearchInput searchTerm={mySearchTerm} setSearchTerm={setMySearchTerm} />

          {/* filters */}
          <button className='product-filter-panel__button' onClick={() => setAccordion1(!accordion1)}>
            <Icon type='allergen' className='product-filter-panel__button-icon' />
            <span className='product-filter-panel__button-text'>Sort by Allergen</span>
          </button>
          <button className='product-filter-panel__button' onClick={() => setAccordion2(!accordion2)}>
            <Icon type='view' className='product-filter-panel__button-icon'/>
            <span className='product-filter-panel__button-text'>Sort by </span>
          </button>
        </div>

        {/* accordions */}
        <div className='product-filter-panel__allergens'>
          
          {/* allergens filter */}
          <div
            ref={contentRef1} 
            className='product-filter-panel__allergens-container'
            style={{
              maxHeight: accordion1 ? `${contentRef1.current?.scrollHeight}px` : '0px',
          }}
          >
            <h5 className='product-filter-panel__allergens-title'>Allergens</h5>
            
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
            className='product-filter-panel__filters-container'
            style={{
              maxHeight: accordion2 ? `${contentRef2.current?.scrollHeight}px` : '0px',
          }}
          >
            <h5 className='product-filter-panel__filters-title'>Price</h5>

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

        </div>
      </div>
    </section>
  )
}