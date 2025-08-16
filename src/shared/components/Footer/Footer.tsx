import './Footer.css';
// COMPONENTS
import { NavLinkButton } from '../NavLinkButton/NavLinkButton';



export const Footer = () => {

  return (
    <footer className='footer'>
      <ul className='footer__list'>

        <li className='footer__li'>
          <NavLinkButton 
            link='/' 
            icon='fork-knife' 
            text="menu" 
            linkClass='footer__link' 
            iconClass='footer__icon-fk' 
            textClass='footer__span'
          />
        </li>

        <li className='footer__li'>
          <NavLinkButton 
            link='/wishlist' 
            icon='heart' 
            text="wishlist" 
            linkClass='footer__link' 
            iconClass='footer__icon-heart' 
            textClass='footer__span'
          />
        </li>

        <li className='footer__li'>
          <NavLinkButton 
            link='/suggestions' 
            icon='star' 
            text="chef's suggestions" 
            linkClass='footer__link' 
            iconClass='footer__icon-star' 
            textClass='footer__span'
          />
        </li>

      </ul>
    </footer>
  )
}