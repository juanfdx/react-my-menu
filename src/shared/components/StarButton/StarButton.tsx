import './StarButton.css';
// COMPONENTS
import { Icon } from '../Icon/Icon';


type StarButtonProps = {
 isRatingModalOpen: boolean
 handleRatingModal: (isOpen: boolean) => void 
}

export const StarButton = ({isRatingModalOpen, handleRatingModal}: StarButtonProps) => {
  
  return (
    <button className='star-button' onClick={()=> handleRatingModal(!isRatingModalOpen)}>
      <Icon type='rate-star' className='star-button__star-icon' />
    </button>
  )
}