import './Sidebar.css';
import { Link } from 'react-router';
// STORE
import { useModalStore } from '../../../stores/useModalStore';
import { useMenuStore } from '../../../stores/useMenuStore';
// UTILS
import { getSelectedLanguage } from '../../utils/languages-methods';
import { capitalizeFirstLetter } from '../../utils/string-methods';
// COMPONENTS
import { Icon } from '../Icon/Icon';
// IMAGES
import restaurantImg from '../../../assets/images/restaurant/pop-restaurant.webp'
import logo from '../../../assets/images/logo/logo.png'



export const Sidebar = () => {

  const isOpen     = useModalStore((state) => state.isOpen('sidebar'));
  const closeModal = useModalStore((state) => state.closeModal);

  const myLanguage    = useMenuStore((state) => state.menu.language);
  const language = getSelectedLanguage(myLanguage);
  

  return (
    <nav 
      className={`sidebar ${isOpen && 'sidebar--active'}`}
      onClick={closeModal}
    >
      <div 
        className={`sidebar__container ${isOpen && 'sidebar__container--active'}`}
        onClick={(e) => e.stopPropagation()}
      >

        <div className='sidebar__header'>
          <img src={restaurantImg} className="sidebar__img" alt="restaurant" />
          <div className='sidebar__header-overlay'></div>

          <div className='sidebar__header-content'>
            <img className="sidebar__header-logo" src={logo} alt="logo" />

            <div className='sidebar__header-text'>
              <h1 className='sidebar__header-title'>demo</h1>
              <p className='sidebar__header-subtitle'>restaurant - madrid</p>
            </div>
          </div>

          <div className='sidebar__header-phone'>
            <Icon type='phone' className='sidebar__header-phone-icon' />
            <span>918 25 33 54</span>
          </div>
        </div>
  
        <ul className='sidebar__list'>
          <li className='sidebar__li' onClick={closeModal}>
            <Link to='/' className='sidebar__link'>{capitalizeFirstLetter(language.home)}</Link>
          </li>
          <li className='sidebar__li' onClick={closeModal}>
            <Link to='/about' className='sidebar__link'>{capitalizeFirstLetter(language.about)}</Link>
          </li>
          <li className='sidebar__li' onClick={closeModal}>
            <Link to='/contact' className='sidebar__link'>{capitalizeFirstLetter(language.contact)}</Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}