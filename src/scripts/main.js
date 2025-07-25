'use strict';

// Uncomment the next lines to use your game instance in the browser
// const Game = require('../modules/Game.class');
// const game = new Game();

// Write your code here
import { Game } from '../modules/Game.class';

const game = new Game();
const startButton = document.querySelector('button.start');
const messageLose = document.querySelector('message-lose');

startButton.addEventListener('click', () => {
  messageLose.classList.add('hidden');
  game.restart();
  startButton.textContent = 'Restart';
  startButton.classList.remove('start');
  startButton.classList.add('restart');
  renderBoard(game.getState());
});

function renderBoard(board) {
  const cells = document.querySelectorAll('.cell');

  board.flat().forEach((value, index) => {
    cells[index].textContent = value !== 0 ? value : '';
    cells[index].className = `cell value - ${value}`;
  });
}
