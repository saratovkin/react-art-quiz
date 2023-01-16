import React from 'react';
import { AnswersState } from '../../../../types';

import './PicturesQuestions.css';

const PicturesQuestions = ({ answers, correctAnswer, checkAnswer }: AnswersState) => {
  return (
    <>
      <p>
        Какую картину написал <span>{correctAnswer?.author}</span> ?
      </p>
      <div className="picture-answers">
        {answers?.map((a, i) => (
          <img
            className="picture-answer"
            key={i}
            src={`https://raw.githubusercontent.com/irinainina/image-data/master/img/${a.imageNum}.jpg`}
            alt="picture"
            onClick={() => checkAnswer(a?.author)}
          />
        ))}
      </div>
    </>
  );
};

export default PicturesQuestions;
