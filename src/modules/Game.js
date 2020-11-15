import Table from "./Table.js"

export default class Game {
  constructor() {
    this.cards = [];
    this.openCards = [];
    this.guessedCards = [];
    this.cards = [];
    this.table = null;
    this.startBtn = document.getElementById('btn-start');
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
      setTimeout(() => {
        this.flipBack();
      }, 1000);

      return;
    }

    this.guessedCards.push(...this.openCards);
    this.cards.length === this.guessedCards.length
      ? this.win()
      : this.removeCards();
  }

  flipBack() {
    for (let item of this.openCards) {
      item.card.classList.remove("flip");
      item.fliped = !item.fliped;
    }

    this.openCards.length = 0;
  }

  removeCards() {
    for (let item of this.openCards) {
      item.card.classList.remove("active");
      item.active = !item.active;
    }
    this.openCards.length = 0;
  }

  start() {
    this.table = new Table();
    this.table.generatingMaps();
    this.cards = this.table.cards;
    this.setEventClickForCards(this.cards)
  }

  initalGame() {
    this.setEventClickForStartBtn()
  }

  setEventClickForCards(cards) {
    for (const itemCard of cards) {
      itemCard.card.onclick = () => {
          this.flipping(itemCard);
        };
    }
  }

  setEventClickForStartBtn() {
    this.startBtn.onclick = () => {
      const memoryTable = document.getElementById('game-page');
      const startTable = document.getElementById('start-page');

      memoryTable.classList.remove('hide');
      startTable.classList.add('hide');
      this.start();
    }
  }

  win() {
    const memoryTable = document.getElementById('game-page');
    const endTable = document.getElementById('end-page');
    const restartBtn = document.getElementById('btn-restart');
    memoryTable.classList.add('hide');
    endTable.classList.remove('hide');
    
    restartBtn.onclick = () => {
      memoryTable.classList.remove('hide');
      endTable.classList.add('hide');
      this.cleanTable();
      this.start();
    }
  }

  cleanTable() {
    for (const item of this.cards) {
      item.card.remove();
    }
  }
}
