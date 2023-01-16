import React, { useEffect, useState } from 'react';

import { GameEngine, Indicators, NavigationBtns, Results, RoundInfo } from './components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './GamePage.css';

const GamePage = ({ gameMode }: { gameMode: string }) => {
  const state = useSelector((state: RootState) => state.picturesReducer);
  const params = useParams();
  const gameId: number = params.gameId ? +params.gameId * 10 : 0;
  const [stats, setStats] = useState<boolean[]>([]);
  const [isRoundStarted, setisRoundStarted] = useState(false);
  const [isRoundEnded, setIsRoundEnded] = useState(false);
  const start = gameMode === 'artists' ? 0 : 120;
  // TODO remove magic numbers @saratovkin

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
        <Results questions={state.pictures.slice(gameId, gameId + 10)} stats={stats} />
        <NavigationBtns onStartAgain={startAgain} />
      </>
    ) : (
      <>
        <Indicators stats={stats} />
        <GameEngine
          gameId={gameId}
          gameMode={gameMode}
          gameData={state.pictures}
          saveAnswer={saveAnswer}
        />
      </>
    )
  ) : (
    <RoundInfo gameMode={gameMode} gameId={gameId / 10} onClick={() => setisRoundStarted(true)} />
  );
};

export default GamePage;
