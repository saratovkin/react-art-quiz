import React, { useEffect, useState } from 'react';

import { GameEngine, Indicators, NavigationBtns, Results, RoundInfo } from './components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, StatsActions } from '../../store';
import './GamePage.css';

const GamePage = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const picturesState = useSelector((state: RootState) => state.picturesReducer);
  const { pictures } = picturesState;
  const [stats, setStats] = useState<boolean[]>([]);
  const [isRoundStarted, setisRoundStarted] = useState(false);
  const [isRoundEnded, setIsRoundEnded] = useState(false);
  // TODO remove magic numbers @saratovkin
  const gameId = Number(params.gameId);
  const gameMode = String(params.gameMode);
  const startIdx = gameId * 10;

  useEffect(() => {
    if (stats.length === 10) {
      const result = stats.filter((a) => a).length;
      dispatch(StatsActions.addResult({ result, gameId }));
    }
  }, [stats, gameId]);

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
      <div className="game-wrapper">
        <Indicators stats={stats} />
        <GameEngine gameId={startIdx} gameMode={gameMode} saveAnswer={saveAnswer} />
      </div>
    )
  ) : (
    <RoundInfo gameId={gameId} onClick={() => setisRoundStarted(true)} />
  );
};

export default GamePage;
