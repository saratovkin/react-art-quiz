import React from 'react';
import { Link } from 'react-router-dom';

import './LevelCard.css';

const LevelCard = ({ title, index }: { title: string; index: number }) => {
  return (
    <Link to={index.toString()}>
      <div className="category">
        <div className="category-title">
          <div className="category-number">{index + 1}</div>
          <div className="category-name">{title}</div>
        </div>
        <div
          className="category-img"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/irinainina/image-data/master/img/${
              index * 10
            }.jpg)`,
          }}
        />
      </div>
    </Link>
  );
};

export default LevelCard;
