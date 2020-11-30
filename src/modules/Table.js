import { getElementFromDOM, mapCards, setCardWidthHeight } from "./Helpers.js";
import { getCardsInGame } from "./Strategy.js";

export default class Table {
  #cards = [];
  #pairsInGame = 10;
  #minLevelInGame = 1;
  #tableElement = getElementFromDOM("#game-table");

  generatingMaps(user, counterGame) {
    this.#cards = [];
    const gameLevel = this.getLevelGames(user.gameLevel);
    this.#pairsInGame = getCardsInGame(gameLevel);
    this.#cards = mapCards(gameLevel, counterGame, {
      pairsInGame: this.#pairsInGame,
      board: this.#tableElement,
    });
    const table = getElementFromDOM(".memory-game__table");
    setCardWidthHeight(table, this.#pairsInGame);
    return gameLevel;
  }
  get cards() {
    return this.#cards;
  }

  getLevelGames(gameLevel) {
    let setLevelGame = getElementFromDOM("#level-game");
    const newGameLevel = +setLevelGame.value;
    setLevelGame.value = "";
    if (newGameLevel > this.#minLevelInGame) {
      return newGameLevel;
    }
    return gameLevel;
  }
}
