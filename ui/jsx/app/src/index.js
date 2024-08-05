import React from 'react';
import ReactDOM from 'react-dom/client';
import { Nav, NavDark, NavLeft, NavRight } from './components/nav/nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <NavDark />
    <NavLeft />
    <NavRight />
  </React.StrictMode>
);
