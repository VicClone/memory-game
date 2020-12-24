import { getElementFromDOM, readJsonUsers, uuid } from './Helpers.js';

const tableName = getElementFromDOM('.memory-game__title-name span');
const tableLevel = getElementFromDOM('.memory-game__title-level span');
const tableScore = getElementFromDOM('.memory-game__title-allScore span');
let scoreAll = getElementFromDOM('#scoreAll');

export default class User {
  _id = localStorage.getItem('id') || uuid();
  _name = this._getName() || 'Вы не назвались!';
  _gameLevel = 1;
  _score = 0;
  _time = 0;

  _getName() {
    const nameUser = getElementFromDOM('.name').value;
    const userNameLocal = localStorage.getItem('name');
    if (userNameLocal !== nameUser) {
      localStorage.setItem('name', nameUser);
      this._id = uuid();
      localStorage.setItem('id', this._id);
    }
    return nameUser;
  }

  async getScore() {
    const userIdLocal = await localStorage.getItem('id');
    if (userIdLocal) {
      const userInfo = await readJsonUsers().then();
      if (!userInfo) {
        return;
      }
      scoreAll.textContent = this._score = userInfo.score;
      this._time = userInfo.time;
      return;
    }
    return 0;
  }

  get gameLevel() {
    return this._gameLevel;
  }
  set gameLevel(value) {
    this._gameLevel = value;
  }

  get name() {
    return this._name;
  }

  userForLeaderboard() {
    return {
      id: this._id,
      name: this._name,
      score: this._score,
      level: this._gameLevel,
      time: this._time,
    };
  }

  selectLevel(counterGames, scoreGame) {
    const badGame = 8;
    if (scoreGame < badGame && this._gameLevel > 1) {
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

  get timeUser() {
    return this._time;
  }
  set timeUser(value) {
    this._time += value;
  }

  getInfoUser() {
    tableName.textContent = this._name;
    tableLevel.textContent = this._gameLevel;
    tableScore.textContent = this._score;
  }
}
