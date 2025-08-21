import './Navbar.css';
import { Link } from 'react-router';
// STORE
import { useModalStore } from '../../../stores/useModalStore';
// COMPONENTS
import { NavLinkButton } from '../NavLinkButton/NavLinkButton';
// IMAGES
import iconSettings from '../../../assets/images/svg/settings.svg';
import logo from '../../../assets/images/logo/logo.png';
// DATA
import { languages } from '../../../data/data-languages';
import { useMenuStore } from '../../../stores/useMenuStore';




export const Navbar = () => {

  const openModal = useModalStore((state) => state.openModal);
  const myLanguage = useMenuStore((state) => state.menu.language);


  
  return (
    <nav className='navbar'>
      {/* logo */}
      <Link to='/' className='navbar__logo-link'>
        <img className='navbar__img-logo' src={logo} alt="logo" />
      </Link>

      {/* navigation */}
      <ul className='navbar__list'>
        <li className='navbar__li'>
          <NavLinkButton 
            link='/' 
            icon='fork-knife' 
            text="Menu" 
            linkClass='navbar__link' 
            iconClass='navbar__icon-fk' 
            textClass='navbar__span'
          />
        </li>

        <li className='navbar__li'>
          <NavLinkButton 
            link='/wishlist' 
            icon='heart' 
            text="wishlist" 
            linkClass='navbar__link' 
            iconClass='navbar__icon-heart' 
            textClass='navbar__span'
          />
        </li>

        <li className='navbar__li'>
          <NavLinkButton 
            link='/suggestions' 
            icon='star' 
            text="chef's suggestions"
            linkClass='navbar__link' 
            iconClass='navbar__icon-star' 
            textClass='navbar__span'
          />
        </li>

      </ul>

      {/* action buttons */}
      <div className='navbar__actions'>

        {/* languages */}
        {languages?.map((lang) =>        
          <button 
            key={lang.id} 
            className={`navbar__btn-flag ${lang.locale === myLanguage ? 'navbar__btn-flag--active' : ''}`} 
            onClick={() => openModal('language')}
          >
            <img className='navbar__img-flag' src={lang.image} alt={`${lang.locale} flag`} />
          </button>  
        )}

        {/* settings */}
        <button className='navbar__btn'>
          <img className='navbar__icon-settings' src={iconSettings} alt="settings icon" />
        </button>
      </div>

    </nav>
  )
}