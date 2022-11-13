import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/AxEx';
import reportWebVitals from './reportWebVitals';
import Header from './componets/Header';
import AxEx from "./componets/AxEx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <AxEx />
      <App />
  </React.StrictMode>
);

reportWebVitals();
