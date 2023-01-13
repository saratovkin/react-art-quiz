import React from 'react';

import './Button.css';

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
