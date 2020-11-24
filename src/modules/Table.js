import { mapCards } from "./Helpers.js";
import { getCardsInGame } from "./Strategy.js";

export default class Table {
  constructor() {
    this.cards = [];
    this.pairsInGame = 10;
    this.minLevelInGame = 1;
    this.table = document.getElementById("game-table");
  }

  generatingMaps(gameLevel) {
    this.cards = [];
    // this.pairsInGame = this.getLevelGames();
    this.pairsInGame = getCardsInGame(gameLevel);
    this.cards = mapCards(gameLevel, this.pairsInGame, this.table);
  }

  getLevelGames() {
    let setLevelGame = document.getElementById("level-game").value;
    if (setLevelGame < this.minLevelInGame) return this.minLevelInGame;
    return setLevelGame;
  }
}
