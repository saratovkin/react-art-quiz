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
          <div
            className="picture-answer"
            key={i}
            onClick={() => checkAnswer(a?.author)}
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/irinainina/image-data/master/img/${a.imageNum}.jpg)`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default PicturesQuestions;
