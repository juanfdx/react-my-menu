import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
//TOASTIFY
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer 
      position='top-center' 
      autoClose={2000} 
      pauseOnFocusLoss={false} 
      limit={1}
    />
  </StrictMode>,
)
