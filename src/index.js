import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import home from './Home';
import HomePage from './Home';
import { BrowserRouter, Route, Routes, Switch, Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);

