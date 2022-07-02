import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'
import Router from './router/router';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
