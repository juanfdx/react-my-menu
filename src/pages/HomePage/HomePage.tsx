import { Outlet } from 'react-router';
import './HomePage.css';
// COMPONENTS
import { Header } from '../../components/common/Header/Header';
import { Footer } from '../../components/common/Footer/Footer';


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