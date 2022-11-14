import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './componets/Header';
import AxEx from "./componets/AxEx";
import MainContents from "./componets/MainContents";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <MainContents data=<AxEx line="탑"/> />
  </React.StrictMode>
);

reportWebVitals();
