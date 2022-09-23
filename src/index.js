import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button/button';
import Componen from './component';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Componen />
    <Button
      color='canyon'
      width='120px'>Login</Button>
    <Button
      width='160px'
      bg='crimson'>Log out</Button>
  </React.StrictMode>
);

