import { getElementFromDOM, mapCards } from "./Helpers.js";
import { getCardsInGame } from "./Strategy.js";

export default class Table {
  #cards = [];
  #pairsInGame = 10;
  #minLevelInGame = 1;
  #tableElement = getElementFromDOM("#game-table");

  generatingMaps(gameLevel) {
    this.#cards = [];
    // this.pairsInGame = this.getLevelGames();
    this.#pairsInGame = getCardsInGame(gameLevel);
    this.#cards = mapCards(gameLevel, this.#pairsInGame, this.#tableElement);
  }
  get cards() {
    return this.#cards;
  }

  getLevelGames() {
    let setLevelGame = getElementFromDOM("#level-game").value;
    if (setLevelGame < this.minLevelInGame) return this.minLevelInGame;
    return setLevelGame;
  }
}
