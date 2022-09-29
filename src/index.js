import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root';
import Context from './context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);

