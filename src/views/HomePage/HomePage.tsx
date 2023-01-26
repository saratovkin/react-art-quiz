import React from 'react';

import { ModeSelector } from './components';
import { HOMEPAGE_LINKS } from '../../constants';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="mode-selectors">
      {HOMEPAGE_LINKS.map((l, i) => (
        <ModeSelector title={l.title} index={i} link={l.to} key={i} />
      ))}
    </div>
  );
};
export default HomePage;
