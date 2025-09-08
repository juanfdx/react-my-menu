import './HomePage.css';
import { Outlet, useNavigation } from 'react-router';
// COMPONENTS
import { Header } from '../../shared/components/Header/Header';
import { Footer } from '../../shared/components/Footer/Footer';
import { ProductFilterPanel } from '../../modules/products/components/ProductFilterPanel/ProductFilterPanel';
import { CategoryFilter } from '../../modules/products/components/CategoryFilter/CategoryFilter';
import { Loader } from '../../shared/components/Loader/Loader';
import { Sidebar } from '../../shared/components/Sidebar/Sidebar';
import { LanguageModal } from '../../shared/components/LanguageModal/LanguageModal';



export const HomePage = () => {

  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";
  

  return (
    <div className='home-page'>
      <Header />
      <ProductFilterPanel />
      <CategoryFilter />
      
      <div className='home-page__main'>
        {isNavigating ? <Loader /> : <Outlet />}
      </div>
  
      <Footer />
      <Sidebar />
      <LanguageModal />
    </div>
  )
}