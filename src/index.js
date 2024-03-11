import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Pages
import P1 from './pages/P1';

// General React render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// // React with append
// const root = ReactDOM.createRoot(document.getElementById('root').append(JSON.stringify(<P1 />)));
// root.render(
//   <App />
// );

reportWebVitals();
