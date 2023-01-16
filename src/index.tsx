import React from 'react';
import { PATH } from './constants';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { About, HomePage, LevelsPage, Settings, GamePage } from './views';

createRoot(document.getElementById('root') as HTMLElement)?.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={PATH.home} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.artistQuiz} element={<LevelsPage type="artists" />} />
          <Route path={PATH.picturesQuiz} element={<LevelsPage type="pictures" />} />
          <Route path={`${PATH.artistQuiz}/:gameId`} element={<GamePage gameMode="artists" />} />
          <Route path={`${PATH.picturesQuiz}/:gameId`} element={<GamePage gameMode="pictures" />} />
          <Route path={PATH.settings} element={<Settings />} />
          <Route path={PATH.about} element={<About />} />
        </Route>
        {/* add Error Page @saratovkin */}
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
