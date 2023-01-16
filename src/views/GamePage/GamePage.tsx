import React, { useState } from 'react';

import { GameEngine, Indicators, NavigationBtns, Results, RoundInfo } from './components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './GamePage.css';

const GamePage = ({ gameMode }: { gameMode: string }) => {
  const state = useSelector((state: RootState) => state.picturesReducer);
  const params = useParams();
  // TODO remove magic numbers @saratovkin
  const gameId: number = params.gameId ? +params.gameId * 10 : 0;
  const { pictures } = state;
  const startIdx = gameId + (gameMode === 'pictures' ? 120 : 0);
  const [stats, setStats] = useState<boolean[]>([]);
  const [isRoundStarted, setisRoundStarted] = useState(false);
  const [isRoundEnded, setIsRoundEnded] = useState(false);

  const saveAnswer = (answer: boolean) => {
    setStats([...stats, answer]);
  };

  const startAgain = () => {
    setStats([]);
    setIsRoundEnded(false);
  };

  if (stats.length === 10 && !isRoundEnded) {
    setIsRoundEnded(true);
  }
  return isRoundStarted ? (
    isRoundEnded ? (
      <>
        <Results pictures={pictures.slice(startIdx, startIdx + 10)} stats={stats} />
        <NavigationBtns onStartAgain={startAgain} />
      </>
    ) : (
      <>
        <Indicators stats={stats} />
        <GameEngine gameId={gameId} gameMode={gameMode} saveAnswer={saveAnswer} />
      </>
    )
  ) : (
    <RoundInfo gameMode={gameMode} gameId={gameId / 10} onClick={() => setisRoundStarted(true)} />
  );
};

export default GamePage;
