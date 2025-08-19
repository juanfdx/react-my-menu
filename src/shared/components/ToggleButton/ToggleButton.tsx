import './ToggleButton.css';

type ToggleButtonProps = {
  mostPopular: boolean,
  setMostPopular: (value: boolean) => void
}

export const ToggleButton = ({mostPopular, setMostPopular}: ToggleButtonProps) => {


  return (
    <label className='switch' htmlFor="switch">
      <input 
        id="switch" 
        className='checkbox' 
        type="checkbox" 
        name="switch"
        checked={mostPopular}
        onChange={() =>setMostPopular(!mostPopular)}
      />
      <span className='slider'></span>
    </label>
  )
}