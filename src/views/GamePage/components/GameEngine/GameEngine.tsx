import React, { useEffect, useState } from 'react';

import { Picture } from '../../../../types';
import { getRandomAnswers } from '../../../../helpers';
import './GameEngine.css';
import { AnswerModal } from '../../../../components';

const GameEngine = ({
  gameId,
  gameData,
  gameMode,
  saveAnswer,
}: {
  gameId: string;
  gameData: Picture[];
  gameMode: string;
  saveAnswer: (answer: boolean) => void;
}) => {
  const [questionNum, setQuestionNum] = useState(0);
  const [isAnswered, setIsAnswered] = useState<{ flag: boolean; answer: boolean }>({
    flag: false,
    answer: false,
  });
  const [answers, setAnswers] = useState<Picture[]>([]);
  const correctAnswer = gameData[+gameId + +questionNum];
  useEffect(() => {
    if (gameData.length) {
      setAnswers(getRandomAnswers(correctAnswer, gameData));
    }
  }, [correctAnswer, gameData]);

  const checkAnswer = (author: string) => {
    if (!isAnswered.flag) {
      setIsAnswered({ flag: true, answer: author === correctAnswer.author });
      saveAnswer(author === correctAnswer.author);
    }
  };

  const moveToNextQuestion = () => {
    setIsAnswered({ flag: false, answer: false });
    setQuestionNum(questionNum + 1);
  };
  return gameData.length ? (
    <div className="game-container">
      {gameMode === 'artists' ? (
        <>
          <p>Кто автор данной картины?</p>
          <div
            className="image-question"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/irinainina/image-data/master/img/${
                +gameId + +questionNum
              }.jpg)`,
            }}
          ></div>
          <div className="answers">
            {/* add unique key @saratovkin */}
            {answers.map((a, i) => (
              <div className="answer" key={i} onClick={() => checkAnswer(a?.author)}>
                {a?.author}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>{`Какую картину написал ${correctAnswer?.author} ?`}</p>
          <div className="answers">
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
      )}
      {isAnswered.flag && <AnswerModal answer={isAnswered.answer} action={moveToNextQuestion} />}
    </div>
  ) : (
    <></>
  );
};

export default GameEngine;
