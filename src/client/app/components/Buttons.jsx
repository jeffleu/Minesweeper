import React from 'react';

const Buttons = (props) => {
  const { startGame } = props;

  return (
    <div className="buttons">
      <div className="button" onClick={() => { startGame(9,9,12) }}>Beginner</div>
      <div className="button" onClick={() => { startGame(16,16,38) }}>Intermediate</div>
      <div className="button" onClick={() => { startGame(16,30,72) }}>Expert</div>
    </div>
  );
};

export default Buttons;
