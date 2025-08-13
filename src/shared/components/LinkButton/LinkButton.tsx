import './LinkButton.css';
import { Link } from 'react-router';
// UTILS
import { capitalizeFirstLetter } from '../../utils/string-methods';
// COMPONENTS
import { Icon } from '../Icon/Icon'


type LinkButtonProps = {
  link: string
  icon?: string
  text: string
  linkClass: string
  iconClass?: string
  textClass: string
}

export const LinkButton = ({ 
  link,
  icon, 
  text, 
  linkClass, 
  iconClass, 
  textClass 
}: LinkButtonProps) => {

  return (
    <Link to={link} className={`link-button ${linkClass}`} >
      { icon && <Icon type={icon} className={iconClass} />}
      <span className={textClass}>{capitalizeFirstLetter(text)}</span>
    </Link>
  )
}