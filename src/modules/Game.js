import { getElementFromDOM } from './Helpers.js';
import nextStepGame from './functions/nextStepGame.js';

export default class Game {
  _context = {
    user: null,
    openCards: [],
    guessedCards: [],
    counterGames: 0,
    table: null,
    state: null,
  };

  _startBtn = getElementFromDOM('#btn-start');

  initialGame() {
    this._setEventClickForStartBtn();
  }

  _setEventClickForStartBtn() {
    this._startBtn.onclick = () => {
      const memoryTable = getElementFromDOM('#game-page');
      const startTable = getElementFromDOM('#start-page');
      const pauseBtn = getElementFromDOM('#btn-pause');
      const infoBtn = getElementFromDOM('#btn-info');
      memoryTable.classList.remove('hide');
      pauseBtn.classList.remove('hide');
      startTable.classList.add('hide');
      infoBtn.classList.add('hide');
      this._context.state = 'start';
      nextStepGame(this._context);
    };
  }
}
