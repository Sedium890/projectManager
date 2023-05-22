import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render( 
  
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  
);

reportWebVitals();
