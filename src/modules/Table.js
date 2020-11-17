import Card from "./Card.js";
import { uniqueNum, getRandomColor } from "./Helpers.js";

export default class Table {
  constructor() {
    this.cards = [];
    this.pairsInGame = 10;
    this.maxPairsInGame = 20;
    this.minPairsInGame = 2;
    this.table = document.getElementById("game-table");
  }

  generatingMaps(gameLevel) {
    this.cards = [];
    this.pairsInGame = this.getPairsUser();
    for (let i = 1; i <= this.pairsInGame; i++) {
      let y = 0;
      const randomIdx = uniqueNum(this.cards);
      const randomColor1 = getRandomColor();
      const randomColor2 = getRandomColor();
      const randomColor3 = getRandomColor();
      do {
        const card = new Card(randomIdx, `${randomIdx}.png`);
        gameLevel > 3
          ? (card.bg = `linear-gradient(180deg, ${randomColor1} 0%, ${randomColor2} 50%,  ${randomColor3} 100%)`)
          : (card.bg = randomColor1);
        card.card.style.background = card.bg;
        this.cards.push(card);
        card.create(this.table);
        y++;
      } while (y < 2);
    }
    console.log(this.cards);
  }

  getPairsUser() {
    let countPairs = document.getElementById("pairs-count").value;

    if (countPairs < this.minPairsInGame) return this.minPairsInGame;
    if (countPairs > this.maxPairsInGame) return this.maxPairsInGame;

    return countPairs;
  }
}
