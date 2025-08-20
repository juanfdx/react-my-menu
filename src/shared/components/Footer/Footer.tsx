import './Footer.css';
// STORE
import { useLanguageStore } from '../../../stores/useLanguageStore';
// COMPONENTS
import { NavLinkButton } from '../NavLinkButton/NavLinkButton';
// DATA
import { footerLinks } from '../../../data/data-links.ts.ts';



export const Footer = () => {

  const currentLanguage = useLanguageStore((state) => state.currentLanguage);

  // Filter links: try current language, then fallback to 'en'
  const localizedLinks = footerLinks.filter(
    (link) => link.locale === currentLanguage
  );

  const linksToRender = localizedLinks.length > 0
    ? localizedLinks
    : footerLinks.filter((link) => link.locale === 'en');


    
  return (
    <footer className='footer'>
      <ul className='footer__list'>

        {linksToRender?.map((link) => (
          <li className='footer__li' key={link.id} >
            <NavLinkButton 
              link={link.link} 
              icon={link.icon} 
              text={link.name} 
              linkClass='footer__link' 
              iconClass={link.iconClass} 
              textClass='footer__span'
            /> 
          </li>
        ))}

      </ul>
    </footer>
  )
}