import React from 'react';

import './LevelCard.css';

const LevelCard = ({ title, index }: { title: string; index: number }) => {
  console.log(index);
  return (
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
  );
};

export default LevelCard;
