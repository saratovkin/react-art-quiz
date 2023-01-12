import React from 'react';
import { Picture } from '../../types';

import './Results.css';

const Results = ({ questions, stats }: { questions: Picture[]; stats: boolean[] }) => {
  console.log(questions);
  return (
    <>
      {questions.map((a, i) => (
        <div key={i}>{`${a.author} - ${stats[i]}`}</div>
      ))}
    </>
  );
};

export default Results;
