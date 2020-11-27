const tableName = document.querySelector(".memory-game__title-name span");
const tableLevel = document.querySelector(".memory-game__title-level span");
const tableScore = document.querySelector(".memory-game__title-score span");

export default class User {
  #name = this._getName() || "Вы не назвались!";
  #gameLevel = 1;
  #score = 0;

  _getName() {
    return document.querySelector(".name").value;
  }

  get gameLevel() {
    return this.#gameLevel || 1;
  }

  levelUp() {
    this.#gameLevel++;
  }

  getInfoUser() {
    tableName.textContent = this.#name;
    tableLevel.textContent = this.#gameLevel;
    tableScore.textContent = this.#score;
  }
}
