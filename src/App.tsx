import { createBrowserRouter, RouterProvider } from 'react-router'
// PAGES
import { HomePage } from './pages/HomePage/HomePage'
import { Error } from './pages/Error/Error'
import { Products } from './pages/Products/Products'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Products />
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App
