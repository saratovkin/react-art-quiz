import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
import { RootState, HomePageActions, AppDispatch, fetchImages } from './store';

import './App.css';

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const loadPictures = async () => {
    dispatch(fetchImages());
  };

  useEffect(() => {
    loadPictures();
  }, []);
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
