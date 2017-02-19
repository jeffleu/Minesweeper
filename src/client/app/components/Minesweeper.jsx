import React from 'react';
import Row from './Row';

const Minesweeper = (props) => {
  const { board, handleOnClick, handleRightClick } = props;

  return (
    <table>
      <tbody>
        { board.map((row, i) => {
          return <Row
            key={ i }
            row={ row }
            rowIndex={ i }
            handleOnClick={ handleOnClick }
            handleRightClick={ handleRightClick }
            />
        })}
      </tbody>
    </table>
  );
};

export default Minesweeper;
