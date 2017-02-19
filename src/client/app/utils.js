export const createBoard = (height, width, numMines) => {
  // Create blank board with given height, width and number of mines
  let board = [];
  for (let r = 0; r < height; r++) {
    const row = [];
    for (let c = 0; c < width; c++) {
      row.push({
        value: 0,
        show: false,
        flag: false
      });
    }
    board.push(row);
  }
  
  // Place mines randomly on board
  let minesLeft = numMines;
  while(minesLeft) {
    board = placeMine(board);
    minesLeft--;
  }
  
  // Place numbers around mines
  board = placeNumbers(board);
  
  return board;
};

const placeMine = (board) => {
  // Generate array of all blank coordinates
  const blankCoordinates = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c].value === 0) blankCoordinates.push([r, c]);
    }
  }
  
  // Place mine on random coordinate
  const randomIndex = Math.floor(Math.random() * blankCoordinates.length);
  const randomCoordinate = blankCoordinates[randomIndex];
  const randomRow = randomCoordinate[0];
  const randomCol = randomCoordinate[1];
  board[randomRow][randomCol].value = 'M';
  return board;
};

const placeNumbers = (board) => {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c].value !== 'M') {
        board[r][c].value = getNumMinesAroundCell(board, r, c);
      }
    }
  }
  
  return board;
};
  
const getNumMinesAroundCell = (board, r, c) => {
  let mineCount = 0;
  
  // Count number of mines in row above
  if (board[r - 1]) {
    if (board[r - 1][c - 1] && board[r - 1][c - 1].value === 'M') mineCount++;
    if (board[r - 1][c] && board[r - 1][c].value === 'M') mineCount++;
    if (board[r - 1][c + 1] && board[r - 1][c + 1].value === 'M') mineCount++;
  }
  
  // Count number of mines in same row
  if (board[r][c - 1] && board[r][c - 1].value === 'M') mineCount++;
  if (board[r][c + 1] && board[r][c + 1].value === 'M') mineCount++;
  
  // Count number of mines in row below
  if (board[r + 1]) {
    if (board[r + 1][c - 1] && board[r + 1][c - 1].value === 'M') mineCount++;
    if (board[r + 1][c] && board[r + 1][c].value === 'M') mineCount++;
    if (board[r + 1][c + 1] && board[r + 1][c + 1].value === 'M') mineCount++;
  }
  
  return mineCount;
};

export const getCellsLeft = (board) => {
  let cellsLeft = 0;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c].value !== 'M' && board[r][c].show === false) {
        cellsLeft++;
      }
    }
  }
  return cellsLeft;
};

export const getSurrounding = (board, r, c) => {
  const coords = [];
  const queue = [];
  const visited = new Set();
  visited.add(`${r} ${c}`);
  queue.push([r, c]);

  while(queue.length) {
    const current = queue.shift();
    const r = current[0];
    const c = current[1];
    coords.push([r, c]);

    if (board[r][c].value === 0) {
      if (board[r - 1]) {
        if (board[r - 1][c - 1] !== undefined && !board[r - 1][c - 1].flag && !visited.has(`${r - 1} ${c - 1}`)) {
          visited.add(`${r - 1} ${c - 1}`);
          queue.push([r - 1, c - 1]);
        }
        if (board[r - 1][c] !== undefined && !board[r - 1][c].flag && !visited.has(`${r - 1} ${c}`)) {
          visited.add(`${r - 1} ${c}`);
          queue.push([r - 1, c]);
        }
        if (board[r - 1][c + 1] !== undefined && !board[r - 1][c + 1].flag && !visited.has(`${r - 1} ${c + 1}`)) {
          visited.add(`${r - 1} ${c + 1}`);
          queue.push([r - 1, c + 1]);
        }
      }

      if (board[r][c - 1] !== undefined && !board[r][c - 1].flag && !visited.has(`${r} ${c - 1}`)) {
        visited.add(`${r} ${c - 1}`);
        queue.push([r, c - 1]);
      }
      if (board[r][c + 1] !== undefined && !board[r][c + 1].flag && !visited.has(`${r} ${c + 1}`)) {
        visited.add(`${r} ${c + 1}`);
        queue.push([r, c + 1]);
      }

      if (board[r + 1]) {
        if (board[r + 1][c - 1] !== undefined && !board[r + 1][c - 1].flag && !visited.has(`${r + 1} ${c - 1}`)) {
          visited.add(`${r + 1} ${c - 1}`);
          queue.push([r + 1, c - 1]);
        }
        if (board[r + 1][c] !== undefined && !board[r + 1][c].flag && !visited.has(`${r + 1} ${c}`)) {
          visited.add(`${r + 1} ${c}`);
          queue.push([r + 1, c]);
        }
        if (board[r + 1][c + 1] !== undefined && !board[r + 1][c + 1].flag && !visited.has(`${r + 1} ${c + 1}`)) {
          visited.add(`${r + 1} ${c + 1}`);
          queue.push([r + 1, c + 1]);
        }
      }
    }
  }
  
  return coords;
};

export const getBombCoordinates = (board) => {
  const coords = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c].value === 'M') coords.push([r, c]);
    }
  }
  return coords;
};

export const playSound = (sound) => {
  if (sound === 'click') {
    const click = document.querySelector('#clickSound');
    click.play();
  } else if (sound === 'bomb') {
    const bomb = document.querySelector('#bombSound');
    bomb.play();
  }
};





















