import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { SnackbarProvider } from 'notistack';

export const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL || 'http://localhost:5555';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
)
