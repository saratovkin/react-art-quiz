import React from 'react';

import { Link } from 'react-router-dom';
import { PATH, GENRES } from '../../constants';
import LevelCard from './components/LevelCard/LevelCard';

import './Quiz.css';

const Quiz = ({ type }: { type: string }) => {
  return (
    <>
      <Link to={PATH.home}>Back</Link>
      <div className="categories-page">
        {/* REFACTOR CHANGE KEY FROM INDEX TO UNIQUE VALUES @saratovkin */}

        {[...GENRES].map((title, index) => (
          <LevelCard
            index={type === 'artists' ? index : index + GENRES.length}
            title={title}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Quiz;
