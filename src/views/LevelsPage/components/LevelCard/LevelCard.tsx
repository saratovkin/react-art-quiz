import React from 'react';
import { Link } from 'react-router-dom';

import './LevelCard.css';

const LevelCard = ({
  title,
  index,
  gameMode,
}: {
  title: string;
  index: number;
  gameMode: string;
}) => {
  const imgIdx = index * 10 + (gameMode === 'pictures' ? 120 : 0);
  return (
    <Link to={index.toString()}>
      <div className="category">
        <div className="category-title">
          <div className="category-number">{index + 1}</div>
          <div className="category-name">{title}</div>
        </div>
        <img
          className="category-img"
          src={`https://raw.githubusercontent.com/irinainina/image-data/master/img/${imgIdx}.jpg`}
          alt="picture"
        />
      </div>
    </Link>
  );
};

export default LevelCard;
