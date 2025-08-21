import './Footer.css';
// STORE
import { useMenuStore } from '../../../stores/useMenuStore.tsx';
// COMPONENTS
import { NavLinkButton } from '../NavLinkButton/NavLinkButton';
// DATA
import { footerLinks } from '../../../data/data-links.ts.ts';



export const Footer = () => {

  const myLanguage = useMenuStore((state) => state.menu.language);
  

  // Filter links: try current language, then fallback to 'en'
  const localizedLinks = footerLinks.filter(
    (link) => link.locale === myLanguage
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