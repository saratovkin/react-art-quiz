import React, { useEffect, useState } from 'react';

import { Picture } from '../../../../types';
import { getRandomAnswers } from '../../../../helpers';
import { AnswerModal, Button } from '../../../../components';
import './GameEngine.css';

const GameEngine = ({
  gameId,
  gameData,
  gameMode,
  saveAnswer,
}: {
  gameId: number;
  gameData: Picture[];
  gameMode: string;
  saveAnswer: (answer: boolean) => void;
}) => {
  const [questionNum, setQuestionNum] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answers, setAnswers] = useState<Picture[]>([]);
  const correctAnswer = gameData[gameId + questionNum];
  useEffect(() => {
    setAnswers(getRandomAnswers(correctAnswer, gameData));
  }, [correctAnswer, gameData]);

  const checkAnswer = (author: string) => {
    if (!isAnswered) {
      setIsAnswered(true);
      setIsCorrect(author === correctAnswer.author);
      saveAnswer(author === correctAnswer.author);
    }
  };

  const moveToNextQuestion = () => {
    setIsAnswered(false);
    setIsCorrect(false);
    setQuestionNum(questionNum + 1);
  };
  console.log(answers);
  return gameData.length ? (
    <div className="game-container">
      {gameMode === 'artists' ? (
        <div className="artists-container">
          <div
            className="image-question"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/irinainina/image-data/master/img/${
                gameId + questionNum
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
      ) : (
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
      )}
      {isAnswered && <AnswerModal answer={isCorrect} action={moveToNextQuestion} />}
    </div>
  ) : (
    <></>
  );
};

export default GameEngine;
