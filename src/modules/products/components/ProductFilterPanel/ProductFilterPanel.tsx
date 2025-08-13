import './ProductFilterPanel.css';


export const ProductFilterPanel = () => {
  
  return (
    <section className='product-filter-panel'>
      <div className='product-filter-panel__container'>
        {/* search */}
        <input 
          className='product-filter-panel__input' 
          type="text" 
          name='search'
          placeholder='Search...'
          autoComplete='off'
        />

        {/* filters */}
        <button className='product-filter-panel__button'>
          <span className='product-filter-panel__button-text'>Sort by Allergen</span>
        </button>
        <button className='product-filter-panel__button'>
          <span className='product-filter-panel__button-text'>Sort by </span>
        </button>
      </div>
    </section>
  )
}