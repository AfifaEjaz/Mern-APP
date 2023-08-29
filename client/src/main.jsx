import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './User/context/addtoCart/context.jsx'
import GlobalContextProvider from './Context/login/context.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <GlobalContextProvider>
    <CartContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </CartContextProvider>
  </GlobalContextProvider>

  ,
)
