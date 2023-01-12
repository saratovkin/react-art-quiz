import React from 'react';
import { PATH } from './constants';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HomePage, Quiz, Settings } from './views';

createRoot(document.getElementById('root') as HTMLElement)?.render(
  <BrowserRouter>
    <Routes>
      <Route path={PATH.home} element={<App />}>
        <Route index element={<HomePage />} />
        <Route path={PATH.artistQuiz} element={<Quiz type="artists" />} />
        <Route path={PATH.picturesQuiz} element={<Quiz type="pictures" />} />
        {/* <Route path={PATH.blitzQuiz} element={<BlitzQuiz />} /> */}
        <Route path={PATH.settings} element={<Settings />} />
      </Route>
      {/* add Error Page @saratovkin */}
      <Route path="*" element={<></>} />
    </Routes>
  </BrowserRouter>
);
