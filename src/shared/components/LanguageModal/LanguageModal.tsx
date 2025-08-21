import './LanguageModal.css';
import { toast } from 'react-toastify';
// STORE
import { useModalStore } from '../../../stores/useModalStore';
import { useLanguageStore, type Locale } from '../../../stores/useLanguageStore';
import { useMenuStore } from '../../../stores/useMenuStore';
// UTILS
import { capitalizeFirstLetter } from '../../utils/string-methods';
// COMPONENTS
import { ExitIcon } from '../../../assets/images/svg/ExitIcon';
// DATA
import { languages, type Language } from '../../../data/data-languages';



export const LanguageModal = () => {

  const isOpen = useModalStore((state) => state.isOpen('language'));
  const closeModal = useModalStore((state) => state.closeModal);
  const { currentLanguage, setLanguage } = useLanguageStore();
  const setMyLanguage = useMenuStore((state) => state.setLanguage);
  


  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang.locale as Locale);
    setMyLanguage(lang.locale); // update localStore
    toast.success(`Language changed to ${capitalizeFirstLetter(lang.name)}`);
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

        <h2 className='language-modal__title'>Select a language</h2>

        <ul className='language-modal__languages-list'>
          {languages.map(language => (
            <li key={language.id} className='language-modal__language-item'>           
              <button 
                className={`language-modal__button ${language.locale === currentLanguage ? 'language-modal__button--active' : ''}`}
                onClick={() => handleSelectLanguage(language)}  
              >
                <img 
                  className='language-modal__img' 
                  src={language.image} 
                  alt={`${language.name} flag`} 
                />
                <span className='language-modal__text'>{language.name}</span>
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}