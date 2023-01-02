import React from 'react';

import { GameSelector, SettingsBtn } from './components';
import PATH from '../../constants/path';

import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="game-selectors">
        {[PATH.artistQuiz, PATH.picturesQuiz, PATH.blitzQuiz].map((e, i) => (
          <GameSelector title={e} index={i} key={i} />
        ))}
      </div>
      <SettingsBtn path={PATH.settings} />
    </>
  );
};
export default HomePage;
