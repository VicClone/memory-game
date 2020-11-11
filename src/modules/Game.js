import { generatingMaps, flipBack } from "./Helpers.js";

export default class Game {
  constructor() {
    this.cards = [];
    this.openCards = [];
    this.pairsInGame = 10;
  }

  flipping(card) {
    if (!card.fliped && this.openCards.length < 2) {
      card.flip();
      this.openCards.push(card);
    }
    if (this.openCards.length === 2) {
      this.compareCards();
    }
  }

  compareCards() {
    if (this.openCards[0].name !== this.openCards[1].name) {
      return setTimeout(() => {
        flipBack.call(this);
      }, 500);
    }
  }

  start() {
    generatingMaps.call(this);
  }
}
