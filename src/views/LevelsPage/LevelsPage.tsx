import React from 'react';

import { GENRES } from '../../constants';
import LevelCard from './components/LevelCard/LevelCard';

import './LevelsPage.css';

const LevelsPage = ({ type }: { type: string }) => {
  return (
    <div className="categories-page">
      {/* REFACTOR CHANGE KEY FROM INDEX TO UNIQUE VALUES @saratovkin */}
      {[...GENRES].map((title, index) => (
        <LevelCard index={index} title={title} key={index} type={type} />
      ))}
    </div>
  );
};

export default LevelsPage;
