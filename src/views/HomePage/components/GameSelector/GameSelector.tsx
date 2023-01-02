import React from 'react';

import { Link } from 'react-router-dom';
import './GameSelector.css';

const GameSelector = ({ title, index }: { title: string; index: number }) => {
  return (
    <Link to={title}>
      <div className="game-selector">
        <div
          className="game-preview"
          style={{ backgroundImage: `url(/assets/img/gametype${index + 1}.jpg)` }}
        />
        <div className="game-title">{title.split('-')[0]} </div>
      </div>
    </Link>
  );
};

export default GameSelector;
