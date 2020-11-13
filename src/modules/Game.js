import { generatingMaps, flipBack, removeCards } from "./Helpers.js";

export default class Game {
  constructor() {
    this.cards = [];
    this.openCards = [];
    this.guessedCards = [];
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
      }, 1000);
    }
    return setTimeout(() => {
      this.guessedCards.push(...this.openCards);
      this.cards.length === this.guessedCards.length
        ? console.log("Конец")
        : removeCards.call(this);
    }, 1000);
  }

  start() {
    generatingMaps.call(this);
  }
}
