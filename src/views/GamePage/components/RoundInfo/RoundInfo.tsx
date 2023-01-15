import React from 'react';

import { Button } from '../../../../components';
import './RoundInfo.css';

const RoundInfo = ({
  gameMode,
  gameId,
  onClick,
}: {
  gameMode: string;
  gameId: number;
  onClick: () => void;
}) => {
  // TODO move string templates to a separate file @saratovkin
  const titleTemplate = gameMode === 'artists' ? 'Художники' : 'Картины';
  const textTemplate1 =
    gameMode === 'artists'
      ? 'В этом режиме вам предстоит определить, кто нарисовал картину.'
      : 'Ваша задача - определить, какую из 4 картин нарисовал художник.';
  return (
    <div className="round-info">
      <p className="round-title">{`Режим "${titleTemplate}"`}</p>
      <p className="round-number">
        Уровень: <span>{gameId + 1}</span>
      </p>
      <span>{textTemplate1}</span>
      <span>Вам предстоить ответить на 10 вопросов.</span>
      <span>В кадом вопрос дается 4 варианта ответа на выбор.</span>
      <span>Время на ответ не ограничено.</span>
      <Button text={'Начать'} onClick={onClick}></Button>
    </div>
  );
};

export default RoundInfo;
