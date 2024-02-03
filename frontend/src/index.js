import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TripContextProvider from './Components/TripContext/TripContext';
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TripContextProvider>
    <App />
  </TripContextProvider>
    
  
);

