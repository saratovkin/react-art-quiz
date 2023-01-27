import React from 'react';
import { Link } from 'react-router-dom';

import './LevelCard.css';

const LevelCard = ({
  title,
  index,
  roundStats,
}: {
  title: string;
  index: number;
  roundStats: number;
}) => {
  // TODO remove magic numbers @saratovkin
  const imgIdx = index * 10;
  const isAttempted = Boolean(roundStats);
  let className = isAttempted ? 'category attempted' : 'category';
  className += roundStats === 10 ? ' perfect' : '';
  return (
    <Link to={index.toString()}>
      <div className={className}>
        <div className="category-title">
          <div className="category-number">{index + 1}</div>
          <div className="category-name">{title}</div>
        </div>
        <img
          className="category-img"
          src={`https://raw.githubusercontent.com/irinainina/image-data/master/img/${imgIdx}.jpg`}
          alt="picture"
        />
        <div className="category-results">{`Рекорд: ${roundStats}/10`}</div>
      </div>
    </Link>
  );
};

export default LevelCard;
