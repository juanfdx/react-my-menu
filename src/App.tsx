import { createBrowserRouter, RouterProvider } from 'react-router'
// PAGES
import { HomePage } from './pages/HomePage/HomePage'
import { Error } from './pages/Error/Error'
import { Products } from './pages/Products/Products'
import { SingleProduct } from './pages/SingleProduct/SingleProduct'
import { Categories } from './pages/Categories/Categories'
import { Suggestions } from './pages/Suggestions/Suggestions'
import { Wishlist } from './pages/Wishlist/Wishlist'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { ErrorElement } from './shared/components/ErrorElement/ErrorElement'
// COMPONENTS
import { Loader } from './shared/components/Loader/Loader'

// LOADERS
import { categoriesLoader } from './modules/products/loaders/categoriesLoader'
import { productsByCategoryLoader } from './modules/products/loaders/productsByCategoryLoader'
import { productsLoader } from './modules/products/loaders/productsLoader'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    hydrateFallbackElement: <Loader />,// show loader when first render of my app
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Categories />,
        loader: categoriesLoader,
        errorElement: <ErrorElement />
      },
      {
        path: '/products/:category',
        element: <Products />,
        loader: productsByCategoryLoader,
        errorElement: <ErrorElement />
      },
      {
        path: '/products/:category/:productId',
        element: <SingleProduct />,
      },
      {
        path: 'suggestions',
        element: <Suggestions />,
        loader: productsLoader,
        errorElement: <ErrorElement />
      },
      {
        path: 'suggestions/:productId',
        element: <SingleProduct />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
        errorElement: <ErrorElement />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorElement />
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App
