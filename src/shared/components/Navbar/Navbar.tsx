import './Navbar.css';
import { Link } from 'react-router';
// STORE
import { useModalStore } from '../../../stores/useModalStore';
import { useMenuStore } from '../../../stores/useMenuStore';
// COMPONENTS
import { NavLinkButton } from '../NavLinkButton/NavLinkButton';
// IMAGES
import iconSettings from '../../../assets/images/svg/settings.svg';
import logo from '../../../assets/images/logo/logo.png';
// DATA
import { flags } from '../../../data/data-languages';
import { navLinks } from '../../../data/data-links.ts';




export const Navbar = () => {

  const openModal = useModalStore((state) => state.openModal);
  const myLanguage = useMenuStore((state) => state.menu.language);

  const flagsToRender = flags[myLanguage] ?? flags['es'];

  // Filter links: try current language, then fallback to 'en'
  const localizedLinks = navLinks.filter(
    (link) => link.locale === myLanguage
  );

  const linksToRender = localizedLinks.length > 0
    ? localizedLinks
    : navLinks.filter((link) => link.locale === 'es');


  
  return (
    <nav className='navbar'>
      {/* logo */}
      <Link to='/' className='navbar__logo-link'>
        <img className='navbar__img-logo' src={logo} alt="logo" />
      </Link>

      {/* navigation */}
      <ul className='navbar__list'>
        {linksToRender?.map((link) => (
          <li key={link.id} className='navbar__li'>
            <NavLinkButton 
              link={link.link} 
              icon={link.icon} 
              text={link.name} 
              linkClass='navbar__link' 
              iconClass={link.iconClass} 
              textClass='navbar__span'
            />
          </li>
        ))}
      </ul>

      {/* action buttons */}
      <div className='navbar__actions'>

        {/* languages */}
        {flagsToRender?.map((flag) =>        
          <button 
            key={flag.id} 
            className={`navbar__btn-flag ${flag.locale === myLanguage ? 'navbar__btn-flag--active' : ''}`} 
            onClick={() => openModal('language')}
          >
            <img className='navbar__img-flag' src={flag.image} alt={`${flag.locale} flag`} />
          </button>  
        )}

        {/* settings */}
        <button 
          className='navbar__btn' 
          onClick={() => openModal('sidebar')}
        >
          <img className='navbar__icon-settings' src={iconSettings} alt="settings icon" />
        </button>
      </div>

    </nav>
  )
}