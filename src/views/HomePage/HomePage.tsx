import React from 'react';

import { ModeSelector } from './components';
import PATH from '../../constants/path';

import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="mode-selectors">
        {[PATH.artistQuiz, PATH.picturesQuiz, PATH.blitzQuiz].map((e, i) => (
          <ModeSelector title={e} index={i} key={i} />
        ))}
      </div>
    </>
  );
};
export default HomePage;
