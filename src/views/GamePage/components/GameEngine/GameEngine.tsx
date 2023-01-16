import React, { useEffect, useState } from 'react';

import { Picture } from '../../../../types';
import { getRandomAnswers } from '../../../../helpers';
import { AnswerModal } from '..';
import { ArtistsQuestions } from '../ArtistsQuestions';
import { PicturesQuestions } from '../PicturesQuestions';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import './GameEngine.css';

const GameEngine = ({
  gameId,
  gameMode,
  saveAnswer,
}: {
  gameId: number;
  gameMode: string;
  saveAnswer: (answer: boolean) => void;
}) => {
  const state = useSelector((state: RootState) => state.picturesReducer);
  const [answers, setAnswers] = useState<Picture[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const correctAnswer = state.pictures[gameId + questionNum + (gameMode === 'pictures' ? 120 : 0)];
  useEffect(() => {
    setAnswers(getRandomAnswers(correctAnswer, state.pictures));
  }, [correctAnswer, state.pictures]);

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
