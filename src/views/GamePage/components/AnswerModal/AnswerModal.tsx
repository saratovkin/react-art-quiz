import React from 'react';
import { Button } from '../../../../components';

import './AnswerModal.css';

const AnswerModal = ({ answer, action }: { answer: boolean; action: () => void }) => {
  return (
    <>
      <div className="overlay" onClick={action}></div>
      <div className={`answer-modal${answer ? '' : ' wrong'}`}>
        <div className="answer-icon" />
        <p className="answer-text">{answer ? 'Верно!' : 'Неверно!'}</p>
        <Button text={'Дальше'} onClick={action}></Button>
      </div>
    </>
  );
};

export default AnswerModal;
