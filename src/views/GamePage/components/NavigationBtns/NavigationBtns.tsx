import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components';

import './NavigationBtns.css';

const NavigationBtns = ({ onStartAgain }: { onStartAgain: () => void }) => {
  return (
    <div className="navigation-btns">
      <Link to="..">
        <Button text={'Домой'} onClick={() => {}}></Button>
      </Link>
      <Button text={'Еще раз'} onClick={onStartAgain}></Button>
    </div>
  );
};

export default NavigationBtns;
