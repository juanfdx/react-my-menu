import './Loader.css';
// COMPONENTS
import { ThreeDotsSpinner } from '../ThreeDotsSpinner/ThreeDotsSpinner';
//IMAGES
import loader from '../../../assets/images/loaders/loader.jpg'


export const Loader = () => {

  return (
    <div className='loader'>
      <img className='loader__img' src={loader} alt="loader" />
      <ThreeDotsSpinner />
    </div>
  )
}