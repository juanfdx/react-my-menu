import facebook from '../assets/images/social/facebook.svg'
import instagram from '../assets/images/social/instagram.svg'
import linkedin from '../assets/images/social/linkedin.svg'

export interface Social {
  id: string;
  url: string;
  image: string;
}



export const socialNetworks: Social[] = [
  {
    id: '1',
    url: 'https://www.facebook.com',
    image: facebook
  },
  {
    id: '2',
    url: 'https://www.instagram.com',
    image: instagram
  },
  {
    id: '3',
    url: 'https://www.linkedin.com',
    image: linkedin
  },
]