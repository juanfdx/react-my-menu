import { createBrowserRouter, RouterProvider } from 'react-router'
// PAGES
import { HomePage } from './pages/HomePage/HomePage'
import { Error } from './pages/Error/Error'
import { Products } from './pages/Products/Products'
import { Categories } from './pages/Categories/Categories'
import { ProductModal } from './pages/ProductModal/ProductModal'
import { ErrorElement } from './shared/components/ErrorElement/ErrorElement'

// LOADERS
import { categoriesLoader } from './modules/products/loaders/categoriesLoader'
import { productsLoader } from './modules/products/loaders/productsLoader'
import { productLoader } from './modules/products/loaders/productLoader'



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
        loader: productsLoader,
        errorElement: <ErrorElement />
      },
      {
        path: '/products/:category/:productId',
        element: <ProductModal />,
        loader: productLoader,
        errorElement: <ErrorElement />
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App
