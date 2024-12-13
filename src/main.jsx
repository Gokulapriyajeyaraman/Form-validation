import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter  } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import { ThemeProvider } from '@material-tailwind/react';


register();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
   
      <App />
      {/* <Usage /> */}
    
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
