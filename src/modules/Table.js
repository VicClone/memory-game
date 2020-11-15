import Card from "./Card.js";
import {uniqueNum} from "./Helpers.js"

export default class Table {
  constructor() {
    this.table = document.getElementById("game-table");
    this.guessedCards = [];
    this.pairsInGame = 10;
    this.maxPairsInGame = 10;
    this.minPairsInGame = 2;
    this.cards = [];
  }

  generatingMaps() {
    this.cards = [];
    this.pairsInGame = this.getPairsUser();
    
    for (let i = 1; i <= this.pairsInGame; i++) {
      let y = 0;
      const randomIdx = uniqueNum(this.cards);
      do {
        const card = new Card(randomIdx, `${randomIdx}.png`);
        this.cards.push(card);
        card.create(this.table);
        y++;
      } while (y < 2);
    }
  }

  getPairsUser() {
    let countPairs = document.getElementById('pairs-count').value;

    if (countPairs < this.minPairsInGame) return this.minPairsInGame;
    if (countPairs > this.maxPairsInGame) return this.maxPairsInGame;

    return countPairs;
  }
}