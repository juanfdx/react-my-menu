import './Navbar.css';
// IMAGES
import spaFlag from '../../../assets/images/flags/spa-flag.webp';
import iconSettings from '../../../assets/images/svg/settings.svg';
import logo from '../../../assets/images/logo/logo.png';
import { LinkButton } from '../LinkButton/LinkButton';


export const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* logo */}
      <a href="/" className='navbar__logo-link'>
        <img className='navbar__img-logo' src={logo} alt="logo" />
      </a>

      {/* navigation */}
      <ul className='navbar__list'>
        <li className='navbar__li'>
          <LinkButton 
            link='/' 
            icon='fork-knife' 
            text="Menu" 
            linkClass='navbar__link' 
            iconClass='navbar__icon-fk' 
            textClass='navbar__span'
          />
        </li>

        <li className='navbar__li'>
          <LinkButton 
            link='/wishlist' 
            icon='heart' 
            text="wishlist" 
            linkClass='navbar__link' 
            iconClass='navbar__icon-heart' 
            textClass='navbar__span'
          />
        </li>

        <li className='navbar__li'>
          <LinkButton 
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
        <button className='navbar__btn'>
          <img className='navbar__img-flag' src={spaFlag} alt="" />
        </button>
        <button className='navbar__btn'>
          <img className='navbar__icon-settings' src={iconSettings} alt="settings icon" />
        </button>
      </div>

    </nav>
  )
}