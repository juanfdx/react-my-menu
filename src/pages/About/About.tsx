import './About.css';
// STORE
import { useMenuStore } from '../../stores/useMenuStore';
// UTILS
import { getSelectedLanguage } from '../../shared/utils/languages-methods';
import { capitalizeFirstLetter } from '../../shared/utils/string-methods';
// COMPONENTS
import { SocialIconLink } from '../../shared/components/SocialIconLink/SocialIconLink';
// IMAGES
import restaurantImg from '../../assets/images/restaurant/pop-restaurant.webp'
// DATA
import { socialNetworks } from '../../data/data-social-networks'



export const About = () => {

  const myLanguage = useMenuStore((state) => state.menu.language);
  const language = getSelectedLanguage(myLanguage);
  

  return (
    <section className='about'>

      <div className='about__container'>
        <img className='about__img' src={restaurantImg} alt="restaurant" />
        <h1 className='about__title'>demo</h1>
      </div>

      <div className='about__info'>
        <h2 className='about__info-title'>PRUEBAS DISEÑOS</h2>
        <p className='about__text'>Restaurante 5 estrellas de lujo</p>
        
        <ul className='about__restaurant-info-list'>

          <li className='about__restaurant-info-item'>
            <h3 className='about__restaurant-info-title'>{capitalizeFirstLetter(language.phone)}</h3>
            <p className='about__restaurant-info-text'>918 25 33 54</p>
          </li>
          <li className='about__restaurant-info-item'>
            <h3 className='about__restaurant-info-title'>{capitalizeFirstLetter(language.schedule)}</h3>
            <p className='about__restaurant-info-text'>Lunes a Viernes 11:00 - 23:00</p>
          </li>
          <li className='about__restaurant-info-item'>
            <h3 className='about__restaurant-info-title'>{capitalizeFirstLetter(language.socialMedia)}</h3>
            
            <ul className='about__restaurant-networks-list'>
              {socialNetworks.map(social => (
                <li key={social.id} className='about__restaurant-network'>
                  <SocialIconLink url={social.url} image={social.image} />
                </li>
              ))}
            </ul>
          </li>

        </ul>
      </div>

    </section>
  )
}