import './PriceRadio.css';


type Props = {
  price: number
  selectedPrice: number
  handlePriceChange: (price: number) => void
  all?: string
}

export const PriceRadio = ({ price, selectedPrice, handlePriceChange, all }: Props) => {
  
  const allText = all ? all : 'Todos';

  
  return (
    <div className='price-radio'>
      <label 
        className={`price-radio__label ${selectedPrice === price ? 'price-radio__label--active' : ''}`} 
        htmlFor={`price-${price}`}
      >
        <input 
          className='price-radio__input'
          id={`price-${price}`}
          type="radio"
          name="price"
          value={price}
          checked={selectedPrice === price}
          onChange={() => handlePriceChange(price)}
        />
        <span 
          className={`price-radio__text ${selectedPrice === price ? 'price-radio__text--active' : ''}`}
        >
          {price === 0 ? allText : `${price}€`}
        </span>
      </label>
    </div>
  )
}