import React, { useEffect, useState } from 'react';
import { Button } from '../../../../components';
import { loadImages } from '../../../../helpers';
import { AnswersState } from '../../../../types';

import './ArtistsQuestions.css';

const ArtistsQuestions = ({ gameId, questionNum, answers, checkAnswer }: AnswersState) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(false), [questionNum]);
  const imgId = gameId ? gameId + questionNum : questionNum;
  const imgURL = `https://raw.githubusercontent.com/irinainina/image-data/master/img/${imgId}.jpg`;
  loadImages([imgURL], () => setIsLoaded(true));
  return isLoaded ? (
    <div className="artists-container">
      <img className="image-question" src={imgURL} alt="" />
      <div className="answers">
        <p>
          Кто <span>автор</span> данной картины?
        </p>
        {/* add unique key @saratovkin */}
        {answers.map((a, i) => (
          <Button key={i} text={a?.author} onClick={() => checkAnswer(a?.author)}></Button>
        ))}
      </div>
    </div>
  ) : (
    <div className="lds-dual-ring"></div>
  );
};

export default ArtistsQuestions;
