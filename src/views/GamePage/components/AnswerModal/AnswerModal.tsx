import React from 'react';
import { Button } from '../../../../components';

import './AnswerModal.css';

const AnswerModal = ({ answer, action }: { answer: boolean; action: () => void }) => {
  return (
    <>
      <div className="overlay" onClick={action}></div>
      <div className="answer-modal">
        <div className={`answer-icon${answer ? '' : ' wrong'}`} />
        <p className="answer-text">{answer ? 'Верно!' : 'Неверно!'}</p>
        <Button text={'Продолжить'} onClick={action}></Button>
      </div>
    </>
  );
};

export default AnswerModal;
