import './HomePage.css';
import { Outlet } from 'react-router';
// COMPONENTS
import { Header } from '../../shared/components/Header/Header';
import { Footer } from '../../shared/components/Footer/Footer';
import { ProductFilterPanel } from '../../modules/products/components/ProductFilterPanel/ProductFilterPanel';
import { CategoryFilter } from '../../modules/products/components/CategoryFilter/CategoryFilter';



export const HomePage = () => {
  
  return (
    <div className='home-page'>
      <Header />
      <ProductFilterPanel />
      <CategoryFilter />
      
      <div className='home-page__main'>
        <Outlet />
      </div>
  
      <Footer />
    </div>
  )
}