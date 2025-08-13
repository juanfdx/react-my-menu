import './HomePage.css';
import { Outlet } from 'react-router';
// COMPONENTS
import { Header } from '../../shared/components/Header/Header';
import { Footer } from '../../shared/components/Footer/Footer';



export const HomePage = () => {
  
  return (
    <div className='home-page'>
      <Header />

      <div className='home-page__main'>
        <Outlet />
      </div>
  
      <Footer />
    </div>
  )
}