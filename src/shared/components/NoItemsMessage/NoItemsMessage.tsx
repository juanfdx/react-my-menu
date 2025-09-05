import './NoItemsMessage.css';
import { useNavigate } from 'react-router';
// STORE
import { useMenuStore } from '../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../utils/string-methods';
import { getSelectedLanguage } from '../../utils/languages-methods';

type NoItemsMessageProps = {
  type: 'wishlist' | 'suggestions';
  showHomeButton?: boolean
  showBackButton?: boolean
}


export const NoItemsMessage = ({type, showHomeButton = false, showBackButton = false}: NoItemsMessageProps) => {
  
  const navigate = useNavigate();
  const myLanguage = useMenuStore((state) => state.menu.language);

  const language = getSelectedLanguage(myLanguage);

  // Title selection based on type
  let title = '';
  switch (type) {
    case 'wishlist':
      title = language?.wishlistEmpty || 'Tu lista de deseos está vacía';
      break;
    case 'suggestions':
      title = language?.suggestionListEmpty || 'No se encontraron sugerencias';
      break;
    default:
      title = language?.defaultEmpty || 'No se encontraron entradas';
      break;
  }

    // Button texts
  const returnHomeText = language?.returnToMenu || 'Return to menu';
  const goBackText = language?.goBack || 'Go Back';
  


  return (
    <div className='no-items-message'>
      <div className='no-items-message__container'>
        <h1 className='no-items-message__title'>{capitalizeFirstLetter(title)}</h1>
        {showHomeButton && 
          <button className='no-items-message__btn' onClick={() => navigate('/')}>
            {returnHomeText}
          </button>
        }
        {showBackButton && 
          <button className='no-items-message__btn' onClick={() => navigate(-1)}>
            {goBackText}
          </button>
        }
      </div>
    </div>
  )
}