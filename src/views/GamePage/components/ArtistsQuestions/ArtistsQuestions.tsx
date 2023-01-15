import React from 'react';
import { Button } from '../../../../components';
import { AnswersState } from '../../../../types';

import './ArtistsQuestions.css';

const ArtistsQuestions = ({ gameId, questionNum, answers, checkAnswer }: AnswersState) => {
  return (
    <div className="artists-container">
      <div
        className="image-question"
        style={{
          backgroundImage: `url(https://raw.githubusercontent.com/irinainina/image-data/master/img/${
            gameId ? gameId + questionNum : questionNum
          }.jpg)`,
        }}
      ></div>
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
  );
};

export default ArtistsQuestions;
