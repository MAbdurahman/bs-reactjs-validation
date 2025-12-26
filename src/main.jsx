// import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './app/App.jsx';
import NotificationProvider from './assets/context/notificationContext';


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <NotificationProvider>
         <App/>
      </NotificationProvider>
   </BrowserRouter>
)