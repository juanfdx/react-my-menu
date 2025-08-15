import { createBrowserRouter, RouterProvider } from 'react-router'
// PAGES
import { HomePage } from './pages/HomePage/HomePage'
import { Error } from './pages/Error/Error'
import { Products } from './pages/Products/Products'
import { Categories } from './pages/Categories/Categories'

// LOADERS
import { categoriesLoader } from './modules/products/loaders/categoriesLoader'
import { productsLoader } from './modules/products/loaders/productsLoader'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Categories />,
        loader: categoriesLoader
      },
      {
        path: '/products/:category',
        element: <Products />,
        loader: productsLoader
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App
