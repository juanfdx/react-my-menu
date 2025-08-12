import './Footer.css';
// COMPONENTS
import { Icon } from '../Icon/Icon';



export const Footer = () => {

  return (
    <footer className='footer'>
      <ul className='footer__list'>

        <li className='footer__li'>
          <a className='footer__link' href="/">
            <Icon type='fork-knife' className='footer__icon-fk' />
            <span className='footer__span'>Menu</span>
          </a>
        </li>

        <li className='footer__li'>
          <a className='footer__link' href="/products">
            <Icon type='heart' className='footer__icon-heart' />
            <span className='footer__span'>Wishlist</span>
          </a>
        </li>

        <li className='footer__li'>
          <a className='footer__link' href="/contact">
            <Icon type='star' className='footer__icon-star' />
            <span className='footer__span'>Chef's suggestions</span>
          </a>
        </li>

      </ul>
    </footer>
  )
}