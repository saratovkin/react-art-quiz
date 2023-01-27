import React from 'react';

import './Indicators.css';

const Indicators = ({ stats }: { stats: boolean[] }) => {
  // TODO remove magic number @saratovkin
  const flags = Array(10)
    .fill('')
    .map((f, i) => {
      if (stats[i] === true) return 'correct';
      if (stats[i] === false) return 'wrong';
      return '';
    });
  return (
    <div className="question-indicators ">
      {/* TODO add unique keys @saratovkin */}
      {flags.map((f, i) => (
        <div className={`question-bullet ${f}`} key={i}></div>
      ))}
    </div>
  );
};

export default Indicators;
