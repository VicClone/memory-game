import { getElementFromDOM } from "./Helpers.js";

const tableName = getElementFromDOM(".memory-game__title-name span");
const tableLevel = getElementFromDOM(".memory-game__title-level span");
const tableScore = getElementFromDOM(".memory-game__title-allScore span");

export default class User {
  #name = this._getName() || "Вы не назвались!";
  #gameLevel = 1;
  #score = 0;

  _getName() {
    return getElementFromDOM(".name").value;
  }

  get gameLevel() {
    return this.#gameLevel;
  }
  set gameLevel(value) {
    this.#gameLevel = value;
  }

  get name() {
    return this.#name;
  }

  levelUp(counterGames) {
    if (counterGames % 2 === 0) {
      return this.#gameLevel++;
    }
  }

  get scoreUser() {
    return this.#score;
  }
  set scoreUser(value) {
    this.#score += value;
  }

  getInfoUser() {
    tableName.textContent = this.#name;
    tableLevel.textContent = this.#gameLevel;
    tableScore.textContent = this.#score;
  }
}
