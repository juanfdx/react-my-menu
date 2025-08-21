import { createBrowserRouter, RouterProvider } from 'react-router'
// PAGES
import { HomePage } from './pages/HomePage/HomePage'
import { Error } from './pages/Error/Error'
import { Products } from './pages/Products/Products'
import { SingleProduct } from './pages/SingleProduct/SingleProduct'
import { Categories } from './pages/Categories/Categories'
import { Suggestions } from './pages/Suggestions/Suggestions'
import { ErrorElement } from './shared/components/ErrorElement/ErrorElement'

// LOADERS
import { categoriesLoader } from './modules/products/loaders/categoriesLoader'
import { productsByCategoryLoader } from './modules/products/loaders/productsByCategoryLoader'
import { productsLoader } from './modules/products/loaders/productsLoader'
// import { singleProductLoader } from './modules/products/loaders/singleProductLoader'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
        // loader: singleProductLoader,
        // errorElement: <ErrorElement />
      },
      {
        path: 'suggestions',
        element: <Suggestions />,
        loader: productsLoader,
        errorElement: <ErrorElement />
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App
