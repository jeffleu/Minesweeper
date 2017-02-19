import React from 'react';

const Cell = (props) => {
  const { rowIndex, cellIndex, cell, handleOnClick, handleRightClick } = props;
  let { value, show, flag } = cell;
  value = value === 0 ? '' : value;
  const display = value === 'M' ? <img className="bomb"/> : value;
  const flagImage = flag ? <img className="flag"/> : null;

  return (
    <td className={ show ? 'clicked' : '' }>
      <div className={ show ? 'cell' : 'cell-hide' } onClick={ () => handleOnClick(rowIndex, cellIndex) } onContextMenu={ () => handleRightClick(rowIndex, cellIndex) }>
        <div className={ value > 0 ? `color-${value}` : '' }>
          { show ? display : flagImage }
        </div>
      </div>
    </td>
  );
};

export default Cell;
