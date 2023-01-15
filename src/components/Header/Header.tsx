import React from 'react';

import { Link } from 'react-router-dom';
import { NavigationBar } from './components';
import { LINKS } from '../../constants';

import './Header.css';

const Header = () => {
  const homeLink = LINKS[0];
  const restLinks = LINKS.slice(1);
  return (
    <div className="header">
      <div className="header-logo">
        <Link to={homeLink.to}>
          <span className="header-text">
            <span>Art</span> Quiz
          </span>
        </Link>
      </div>
      <NavigationBar links={restLinks} />
    </div>
  );
};

export default Header;
