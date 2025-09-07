import './SocialIconLink.css';
import { Link } from 'react-router';


type SocialIconLinkProps = {
  url: string;
  image: string;
}

export const SocialIconLink = ({ url, image }: SocialIconLinkProps) => {
  
  return (
    <Link to={url} className='social-icon-link'>
      <img src={image} className="social-icon-link__img" alt="social network image" />
    </Link>
  )
}