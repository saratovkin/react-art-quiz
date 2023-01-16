import React, { useEffect, useState } from 'react';

import { Picture } from '../../../../types';
import { getRandomAnswers } from '../../../../helpers';
import { AnswerModal } from '..';
import './GameEngine.css';
import { ArtistsQuestions } from '../ArtistsQuestions';
import { PicturesQuestions } from '../PicturesQuestions';

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
  const [answers, setAnswers] = useState<Picture[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
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
  return (
    <div className="game-container">
      {gameMode === 'artists' ? (
        <ArtistsQuestions
          gameId={gameId}
          questionNum={questionNum}
          answers={answers}
          checkAnswer={checkAnswer}
        />
      ) : (
        <PicturesQuestions
          questionNum={questionNum}
          answers={answers}
          correctAnswer={correctAnswer}
          checkAnswer={checkAnswer}
        />
      )}
      {isAnswered && <AnswerModal answer={isCorrect} action={moveToNextQuestion} />}
    </div>
  );
};

export default GameEngine;
