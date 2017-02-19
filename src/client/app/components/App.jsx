import React, { Component } from 'react';
import {
  createBoard,
  getCellsLeft,
  getSurrounding,
  getBombCoordinates,
  playSound
} from '../utils';
import Buttons from './Buttons';
import Minesweeper from './Minesweeper';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      board: null,
      gameOver: false,
      message: null
    };
    
    this.startGame = this.startGame.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }
  
  startGame(height, width, numMines) {
    this.setState({
      board: createBoard(height, width, numMines),
      gameOver: false,
      message: null
    });
  }
    
  handleOnClick(r, c) {
    if (!this.state.gameOver) {
      const { board } = this.state;
      const toToggle = (!board[r][c].flag) ? getSurrounding(board, r, c) : [];
      toToggle.forEach(coord => board[coord[0]][coord[1]].show = true);
      
      if (board[r][c].value === 'M' && !board[r][c].flag) {
        const bombCoordinates = getBombCoordinates(board);
        bombCoordinates.forEach(coord => board[coord[0]][coord[1]].show = true);
        playSound('bomb');
        this.setState({ board, gameOver: true, message: 'KABOOM! You lose...' });
      } else if (getCellsLeft(board) === 0) {
        playSound('click');
        this.setState({ board, gameOver: true, message: 'You win!' });
      } else {
        playSound('click');
        this.setState({ board });
      }
    } else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
  
  handleRightClick(r, c) {
    if (!this.state.gameOver) {
      const { board } = this.state;
      if (!board[r][c].show) {
        board[r][c].flag = !board[r][c].flag;
        this.setState({ board });
      }
    } else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
  
  componentWillMount() {
    this.startGame(9, 9, 10);
  }
  
  render() {
    return (
      <div>
        <h1 className="animated fadeInRightBig">Minesweeper</h1>
        <Buttons startGame={ this.startGame }/>
        <Minesweeper board={ this.state.board } handleOnClick={ this.handleOnClick } handleRightClick={ this.handleRightClick }/>
        <div className="message">{ this.state.message }</div>
      </div>
    );
  }
}
