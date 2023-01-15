import React from 'react';

import { Link } from 'react-router-dom';

import './NavigationBar.css';

const NavigationBar = ({ links }: { links: { to: string; title: string }[] }) => {
  return (
    <div className="navigation-bar">
      {links.map((link, i) => {
        // TODO add unique keys @saratovkin
        return (
          <Link className="nav-link" to={link.to} key={i}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationBar;
