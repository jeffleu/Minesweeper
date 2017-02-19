import React from 'react';
import Cell from './Cell';

const Row = (props) => {
  const { row, rowIndex, handleOnClick, handleRightClick } = props;
  
  return (
    <tr>
      { row.map((cell, i) => {
        return <Cell
          key={ i }
          rowIndex={ rowIndex }
          cellIndex={ i }
          cell={ cell }
          handleOnClick={ handleOnClick }
          handleRightClick={ handleRightClick }
          />
      })}
    </tr>
  );
};

export default Row;
