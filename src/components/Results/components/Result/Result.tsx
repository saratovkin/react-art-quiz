import React from 'react';
import { Picture } from '../../../../types';

import './Result.css';

const Result = ({ info, answer, idx }: { info: Picture; answer: boolean; idx: number }) => {
  return (
    <p className={answer ? 'stat' : 'stat wrong'}>
      {`• ${info.author} - ${info.name} (${info.year})`}
    </p>
  );
};

export default Result;
