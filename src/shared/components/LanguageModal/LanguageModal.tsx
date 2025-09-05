import './LanguageModal.css';
import { toast } from 'react-toastify';
// STORE
import { useModalStore } from '../../../stores/useModalStore';
import { useMenuStore } from '../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../utils/string-methods';
import { getSelectedLanguage } from '../../utils/languages-methods';
// COMPONENTS
import { ExitIcon } from '../../../assets/images/svg/ExitIcon';
// DATA
import { flags,  type Flag } from '../../../data/data-languages';



export const LanguageModal = () => {

  const isOpen        = useModalStore((state) => state.isOpen('language'));
  const closeModal    = useModalStore((state) => state.closeModal);
  const myLanguage    = useMenuStore((state) => state.menu.language);
  const setMyLanguage = useMenuStore((state) => state.setLanguage);
  
  const flagsToRender = flags[myLanguage] ?? flags['es'];
  const language = getSelectedLanguage(myLanguage);
   

  const handleSelectLanguage = (flag: Flag) => {
    setMyLanguage(flag.locale); // set language in localStore
    toast.success(`Language changed to ${capitalizeFirstLetter(flag.name)}`);
    closeModal(); // close after selection
  };



  return (
    <div 
      className={`language-modal ${isOpen ? 'language-modal--active' : ''}`} 
      onClick={closeModal}
    >
      <div 
        className={`language-modal__container ${isOpen ? 'language-modal__container--active' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >

        <button 
          className='language-modal__exit-button' 
          onClick={closeModal}
        >
          <ExitIcon className='language-modal__exit-icon' />
        </button>

        <h2 className='language-modal__title'>{capitalizeFirstLetter(language.selectLang)}</h2>

        <ul className='language-modal__languages-list'>
          {flagsToRender.map(flag => (
            <li key={flag.id} className='language-modal__language-item'>           
              <button 
                className={`language-modal__button ${flag.locale === myLanguage ? 'language-modal__button--active' : ''}`}
                onClick={() => handleSelectLanguage(flag)}  
              >
                <img 
                  className='language-modal__img' 
                  src={flag.image} 
                  alt={`${flag.name} flag`} 
                />
                <span className='language-modal__text'>{flag.name}</span>
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}