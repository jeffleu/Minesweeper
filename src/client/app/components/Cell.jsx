import React from 'react';

const Cell = (props) => {
  const { rowIndex, cellIndex, cell, handleOnClick, handleRightClick } = props;
  let { value, show, flag } = cell;
  value = (value === 0) ? '' : value;
  const isBomb = (value === 'M') ? true : false;
  const cellClass = (show) ? 'cell' : 'cell-hide';
  const color = (value > 0) ? `color-${value}` : '';

  const display = (isBomb) ? <img className="bomb"/> : value;
  const flagImage = <img className="flag"/>;

  return (
    <td className={ show ? 'clicked' : '' }>
      <div className={cellClass} onClick={() => handleOnClick(rowIndex, cellIndex)} onContextMenu={() => handleRightClick(rowIndex, cellIndex)}>
        <div className={color}>
          { show ? display : flag ? flagImage : null }
        </div>
      </div>
    </td>
  );
};

export default Cell;
