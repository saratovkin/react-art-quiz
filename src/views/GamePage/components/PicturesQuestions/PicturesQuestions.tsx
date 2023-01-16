import React, { useEffect, useState } from 'react';
import { loadImages } from '../../../../helpers';
import { AnswersState } from '../../../../types';

import './PicturesQuestions.css';

const PicturesQuestions = ({ answers, correctAnswer, checkAnswer }: AnswersState) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(false), [answers]);
  const imgUrls = answers.map(
    (a) => `https://raw.githubusercontent.com/irinainina/image-data/master/img/${a.imageNum}.jpg`
  );
  if (answers.length) {
    loadImages(imgUrls, () => setIsLoaded(true));
  }
  return isLoaded ? (
    <>
      <p>
        Какую картину написал <span>{correctAnswer?.author}</span> ?
      </p>
      <div className="picture-answers">
        {imgUrls?.map((url, i) => (
          <img
            className="picture-answer"
            key={i}
            src={url}
            alt="picture"
            onClick={() => checkAnswer(answers[i].author)}
          />
        ))}
      </div>
    </>
  ) : (
    <div className="loading">
      <p> Загрузка...</p>
    </div>
  );
};

export default PicturesQuestions;
