import React, { useEffect, useState } from 'react';

import { GameEngine, NavigationBtns, Results, RoundInfo } from './components';
import { useParams } from 'react-router-dom';
import './GamePage.css';

const GamePage = ({ gameMode }: { gameMode: string }) => {
  const params = useParams();
  const gameId: number = params.gameId ? +params.gameId * 10 : 0;
  const [data, setData] = useState([]);
  const [stats, setStats] = useState<boolean[]>([]);
  const [isRoundStarted, setisRoundStarted] = useState(false);
  const [isRoundEnded, setIsRoundEnded] = useState(false);
  const start = gameMode === 'artists' ? 0 : 120;
  // TODO remove magic numbers @saratovkin
  const getData = () => {
    fetch('https://raw.githubusercontent.com/saratovkin/art-quiz-json/main/images.json')
      .then((response) => response.json())
      .then((pictures) => setData(pictures.slice(start, start + 120)));
  };
  useEffect(() => {
    getData();
  }, []);

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
  return data.length ? (
    isRoundStarted ? (
      isRoundEnded ? (
        <>
          <Results questions={data.slice(gameId, gameId + 10)} stats={stats} />
          <NavigationBtns onStartAgain={startAgain} />
        </>
      ) : (
        <GameEngine gameId={gameId} gameMode={gameMode} gameData={data} saveAnswer={saveAnswer} />
      )
    ) : (
      <RoundInfo gameMode={gameMode} gameId={gameId / 10} onClick={() => setisRoundStarted(true)} />
    )
  ) : (
    <></>
  );
};

export default GamePage;
