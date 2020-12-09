import { getElementFromDOM } from './Helpers.js';
import { v4 as uuid } from 'uuid';

const tableName = getElementFromDOM('.memory-game__title-name span');
const tableLevel = getElementFromDOM('.memory-game__title-level span');
const tableScore = getElementFromDOM('.memory-game__title-allScore span');

export default class User {
  _id = uuid();
  _name = this._getName() || 'Вы не назвались!';
  _gameLevel = 1;
  _score = 0;

  _getName() {
    return getElementFromDOM('.name').value;
  }

  get gameLevel() {
    return this._gameLevel;
  }
  set gameLevel(value) {
    this._gameLevel = value;
  }

  get name() {
    return this.#name;
  }

  selectLevel(counterGames, scoreGame) {
    const babGame = 8;
    if (scoreGame < babGame && this._gameLevel > 1) {
      return this._gameLevel--;
    }
    if (counterGames % 2 === 0) {
      return this._gameLevel++;
    }
  }

  get scoreUser() {
    return this._score;
  }
  set scoreUser(value) {
    this._score += value;
  }

  getInfoUser() {
    tableName.textContent = this._name;
    tableLevel.textContent = this._gameLevel;
    tableScore.textContent = this._score;
  }
}
