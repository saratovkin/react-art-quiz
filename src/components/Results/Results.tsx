import React from 'react';

import { Picture } from '../../types';
import { Result } from './components';

import './Results.css';

const Results = ({ questions, stats }: { questions: Picture[]; stats: boolean[] }) => {
  return (
    <div className="results">
      <div className="result-score">
        <p className="result-text">Вы ответили на все вопросы!</p>
        <p className="score">{`${stats.filter((a) => a).length}/${stats.length}`}</p>
      </div>
      <p className="result-text">Ваша статистика:</p>
      <div className="result-stats">
        {/* TODO add unique keys @saratovkin */}
        {questions.map((q, i) => (
          <Result info={q} answer={stats[i]} key={i} idx={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default Results;
