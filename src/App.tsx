import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
