import './InitialLoader.css';
// COMPONENTS
import { ThreeDotsSpinner } from '../ThreeDotsSpinner/ThreeDotsSpinner';
//IMAGES
import loader from '../../../assets/images/loaders/loader.jpg'


export const InitialLoader = () => {
  
  return (
    <div className='initial-loader'>
      <img className='initial-loader__img' src={loader} alt="loader" />
      <ThreeDotsSpinner />
    </div>
  )
}
