import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppChistes from './AppChistes.jsx'
import ChistesCompletos from './chistesCompletos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AppChistes /> 
    {/* <ChistesCompletos/> */}
     <App/> 
  </StrictMode>,
)
