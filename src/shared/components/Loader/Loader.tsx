import './Loader.css';
//IMAGES
import loader from '../../../assets/images/loaders/loader.jpg'
import { ThreeDotsSpinner } from '../ThreeDotsSpinner/ThreeDotsSpinner';


export const Loader = () => {
  
  return (
    <div className='loader'>
      <img className='loader__img' src={loader} alt="loader" />
      <ThreeDotsSpinner />
    </div>
  )
}