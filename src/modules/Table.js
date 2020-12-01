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

  cardsOnTheTable() {
    const delay = 100;
    function sortingOrder(a, b) {
      return a.card.style.order - b.card.style.order;
    }
    const arrCards = this.#cards.sort(sortingOrder);
    arrCards.forEach(function (element, i) {
      setTimeout(function () {
        element.card.classList.remove("overseas");
      }, delay * ++i);
    });
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
