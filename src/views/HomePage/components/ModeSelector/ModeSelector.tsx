import React from 'react';

import { Link } from 'react-router-dom';
import './ModeSelector.css';

const ModeSelector = ({ title, index, link }: { title: string; index: number; link: string }) => {
  return (
    <Link to={link}>
      <div className="mode-selector">
        <div
          className="mode-preview"
          style={{ backgroundImage: `url(/assets/img/gamemode${index + 1}.jpg)` }}
        />
        <div className="mode-title">{title.split('-')[0]} </div>
      </div>
    </Link>
  );
};

export default ModeSelector;
