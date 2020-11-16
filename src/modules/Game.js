import Table from "./Table.js";
import User from "./User.js";

export default class Game {
  constructor() {
    this.state = {};
    this.context = {
      user: null,
      openCards: [],
      guessedCards: [],
      table: null,
    };

    this.startBtn = document.getElementById("btn-start");
  }

  flipping(card) {
    if (!card.fliped && this.context.openCards.length < 2) {
      card.flip();
      this.context.openCards.push(card);
    }
    if (this.context.openCards.length === 2) {
      this.compareCards();
    }
  }

  compareCards() {
    if (this.context.openCards[0].name !== this.context.openCards[1].name) {
      return setTimeout(() => {
        this.flipBack();
      }, 1000);
    }

    this.context.guessedCards.push(...this.context.openCards);
    this.context.table.cards.length === this.context.guessedCards.length
      ? setTimeout(() => {
          this.win();
        }, 500)
      : this.removeCards();
  }

  flipBack() {
    for (let item of this.context.openCards) {
      item.card.classList.remove("flip");
      item.fliped = !item.fliped;
    }
    this.context.openCards.length = 0;
  }

  removeCards() {
    for (let item of this.context.openCards) {
      item.card.classList.remove("active");
      item.active = !item.active;
    }
    this.context.openCards.length = 0;
  }

  start() {
    this.context.table = new Table();
    if (!this.context.user) {
      this.context.user = new User();
    }
    this.context.user.renderInfoUser();
    this.context.table.generatingMaps();
    this.setEventClickForCards(this.context.table.cards);
    this.context.guessedCards.length = 0;
    this.context.openCards.length = 0;

    this.setEventClickForPauseBtn();
    this.setEventClickForContinueBtn();
  }

  initialGame() {
    this.setEventClickForStartBtn();
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
      const memoryTable = document.getElementById("game-page");
      const startTable = document.getElementById("start-page");

      memoryTable.classList.remove("hide");
      startTable.classList.add("hide");
      this.start();
    };
  }

  setEventClickForPauseBtn() {
    const pauseBtn = document.getElementById("btn-pause");
    const pauseTable = document.getElementById("pause-page");
    
    pauseBtn.onclick = () => {
      pauseTable.classList.remove('hide');
    }
  }

  setEventClickForContinueBtn() {
    const continueBtn = document.getElementById("btn-continue");
    const pauseTable = document.getElementById("pause-page");
    
    continueBtn.onclick = () => {
      pauseTable.classList.add('hide');
    }
  }

  win() {
    const memoryTable = document.getElementById("game-page");
    const endTable = document.getElementById("end-page");
    const restartBtn = document.getElementById("btn-restart");
    memoryTable.classList.add("hide");
    endTable.classList.remove("hide");

    restartBtn.onclick = () => {
      memoryTable.classList.remove("hide");
      endTable.classList.add("hide");
      this.cleanTable();
      this.context.user.gameLevel++;
      this.start();
    };
  }

  cleanTable() {
    for (const item of this.context.table.cards) {
      item.card.remove();
    }
  }
}
