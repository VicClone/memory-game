import { getElementFromDOM, mapCards, setCardWidthHeight } from "./Helpers.js";
import { getCardsInGame } from "./Strategy.js";

export default class Table {
  _cards = [];
  _pairsInGame = 10;
  _minLevelInGame = 1;
  _tableElement = getElementFromDOM("#game-table");

  generatingMaps(user, counterGame) {
    this._cards = [];
    const gameLevel = this.getLevelGames(user.gameLevel);
    this._pairsInGame = getCardsInGame(gameLevel);
    this._cards = mapCards(gameLevel, counterGame, {
      pairsInGame: this._pairsInGame,
      board: this._tableElement,
    });
    const table = getElementFromDOM(".memory-game__table");
    setCardWidthHeight(table, this._pairsInGame);
    return gameLevel;
  }
  get cards() {
    return this._cards;
  }

  cardsOnTheTable() {
    const delay = 100;
    function sortingOrder(a, b) {
      return a.card.style.order - b.card.style.order;
    }
    const arrCards = this._cards.sort(sortingOrder);
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
    if (newGameLevel > this._minLevelInGame) {
      return newGameLevel;
    }
    return gameLevel;
  }
}
