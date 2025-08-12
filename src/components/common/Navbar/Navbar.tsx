import './Navbar.css';
// COMPONENTS
import { Icon } from '../Icon/Icon';
// IMAGES
import spaFlag from '../../../assets/images/flags/spa-flag.webp';
import iconSettings from '../../../assets/images/svg/settings.svg';


export const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* logo */}
      <a href="/" className='navbar__logo'>
        <Icon type='home' className='navbar__icon-logo' />
      </a>

      {/* action buttons */}
      <div className='navbar__actions'>
        <button className='navbar__btn'>
          <img className='navbar__flag' src={spaFlag} alt="" />
        </button>
        <button className='navbar__btn'>
          <img className='navbar__icon-settings' src={iconSettings} alt="settings icon" />
        </button>
      </div>

    </nav>
  )
}