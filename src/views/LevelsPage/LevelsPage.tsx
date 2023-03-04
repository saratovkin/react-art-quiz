import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { GENRES } from '../../constants';
import { RootState } from '../../store';
import LevelCard from './components/LevelCard/LevelCard';

import './LevelsPage.css';

const LevelsPage = () => {
  // TODO remove magic number and use gameId param instead of gameMode
  const gameMode = useParams().gameMode;
  const startIdx = gameMode === 'pictures' ? 12 : 0;
  const stats = useSelector((state: RootState) => state.statsReducer).stats;
  return (
    <div className="categories-page">
      {/* REFACTOR CHANGE KEY FROM INDEX TO UNIQUE VALUES @saratovkin */}
      {[...GENRES].map((title, index) => {
        const roundStats = stats[index + startIdx];
        return (
          <LevelCard index={index + startIdx} title={title} key={index} roundStats={roundStats} />
        );
      })}
    </div>
  );
};

export default LevelsPage;
