import React, { useEffect, useState } from 'react';

import { GameEngine } from './components';
import { Results } from '../../components';
import { useParams } from 'react-router-dom';
import './ArtistsGame.css';

const ArtistsGame = () => {
  const params = useParams();
  const gameId: string = params.gameId ? params.gameId + '0' : '';
  const [data, setData] = useState([]);
  const [stats, setStats] = useState<boolean[]>([]);
  const [isRoundEnded, setIsRoundEnded] = useState(false);

  const getData = () => {
    fetch('https://raw.githubusercontent.com/saratovkin/art-quiz-json/main/images.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const saveAnswer = (answer: boolean) => {
    setStats([...stats, answer]);
  };

  if (stats.length === 10 && !isRoundEnded) {
    setIsRoundEnded(true);
  }
  return isRoundEnded ? (
    <Results questions={data.slice(+gameId * 10, +gameId * 10 + 10)} stats={stats} />
  ) : (
    <GameEngine gameId={gameId} gameData={data} saveAnswer={saveAnswer} />
  );
};

export default ArtistsGame;
