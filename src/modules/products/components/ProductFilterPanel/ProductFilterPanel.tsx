import './ProductFilterPanel.css';
import { useRef, useState } from 'react';
// COMPONENTS
import { Icon } from '../../../../shared/components/Icon/Icon';
import { AllergenCheckbox } from '../AllergenCheckbox/AllergenCheckbox';
// DATA
import { allergens } from '../../../../data/data-allergens';


export const ProductFilterPanel = () => {

  const [accordion1, setAccordion1] = useState<boolean>(false);
  const [accordion2, setAccordion2] = useState<boolean>(false);

  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);

  
  return (
    <section className='product-filter-panel'>
      <div className='product-filter-panel__container'>
        <div className='product-filter-panel__controls'>
          {/* search */}
          <input 
            className='product-filter-panel__input' 
            type="text" 
            name='search'
            placeholder='Search...'
            autoComplete='off'
          />

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
          <div
            ref={contentRef1} 
            className='product-filter-panel__allergens-container'
            style={{
              maxHeight: accordion1 ? `${contentRef1.current?.scrollHeight}px` : '0px',
          }}
          >
            <h5 className='product-filter-panel__allergens-title'>allergens</h5>
            
            <ul className='product-filter-panel__allergens-list'>
              {allergens?.map((allergen) => (
                <li key={allergen.id} className='product-filter-panel__allergens-item'>
                  <AllergenCheckbox img={allergen.image} text={allergen.name} />
                </li>      
              ))}
            </ul>
          </div>

          <div
            ref={contentRef2} 
            className='product-filter-panel__filters-container'
            style={{
              maxHeight: accordion2 ? `${contentRef2.current?.scrollHeight}px` : '0px',
          }}
          >
            <h5 className='product-filter-panel__filters-title'>view</h5>

            <div className='product-filter-panel__filters'>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}