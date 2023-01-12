import React from 'react';
import { Link } from 'react-router-dom';

import './LevelCard.css';

const LevelCard = ({ title, index, type }: { title: string; index: number; type: string }) => {
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
              type === 'artists' ? index * 10 : index * 10 + 120
            }.jpg)`,
          }}
        />
      </div>
    </Link>
  );
};

export default LevelCard;
