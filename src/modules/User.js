const tableName = document.querySelector(".memory-game__title-name span");
const tableLevel = document.querySelector(".memory-game__title-level span");
const tableScore = document.querySelector(".memory-game__title-score span");

export default class User {
  #name = this.#getName() || "Вы не назвались!";
  #gameLevel = 1;
  #score = 0;

  #getName() {
    return document.querySelector(".name").value;
  }

  renderInfoUser() {
    tableName.textContent = this.#name;
    tableLevel.textContent = this.#gameLevel;
    tableScore.textContent = this.#score;
  }
}
