import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Default Styles
import './index.css';

// Styles
import './assets/styles/project_1/style.css';
import './assets/styles/project_2/style.css';

// General React render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// // React with append
// const root = ReactDOM.createRoot(document.getElementById('root').append(JSON.stringify(<P1 />)));
// root.render(
//   <App />
// );

reportWebVitals();
