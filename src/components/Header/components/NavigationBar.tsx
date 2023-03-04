import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

const NavigationBar = ({ links }: { links: { to: string; title: string }[] }) => {
  return (
    <div className="navigation-bar">
      <div className="burger-icon"></div>
      {links.map((link, i) => {
        // TODO add unique keys @saratovkin
        return (
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            to={link.to}
            key={i}
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavigationBar;
