import Table from "./Table.js";
import User from "./User.js";
import Score from "./Score.js";
import Timer from "./Timer.js";
import { cardsOnTheTable, getElementFromDOM } from "./Helpers.js";

export default class Game {
  constructor() {
    this.context = {
      user: null,
      openCards: [],
      guessedCards: [],
      table: null,
    };

    this.startBtn = getElementFromDOM("#btn-start");
  }

  flipping(card) {
    if (!card.flipped && this.context.openCards.length < 2) {
      card.flip();
      this.context.openCards.push(card);
    }
    if (this.context.openCards.length === 2) {
      this.compareCards();
    }
  }

  compareCards() {
    this.score.fineStop();
    if (
      this.context.openCards[0].name + this.context.openCards[0].bg !==
      this.context.openCards[1].name + this.context.openCards[1].bg
    ) {
      this.score.decrease();

      return setTimeout(() => {
        this.flipBack();
      }, 800);
    }

    this.score.increase();
    this.context.guessedCards.push(...this.context.openCards);
    this.context.table.cards.length === this.context.guessedCards.length
      ? setTimeout(() => {
          this.win();
        }, 500)
      : this.removeCards();
  }

  flipBack() {
    for (let item of this.context.openCards) {
      item = item.flip();
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
    this.score = new Score();
    this.score.initialScore();

    if (!this.context.user) {
      this.context.user = new User();
    }
    this.context.user.getInfoUser();

    this.context.table.generatingMaps(this.context.user.gameLevel);
    this.setEventClickForCards(this.context.table.cards);
    this.context.guessedCards.length = 0;
    this.context.openCards.length = 0;

    this.setEventClickForPauseBtn();
    this.setEventClickForContinueBtn();

    cardsOnTheTable(this.context.table.cards);
  }

  initialGame() {
    this.setEventClickForStartBtn();
  }

  setEventClickForCards(cards) {
    for (const itemCard of cards) {
      itemCard.card.onclick = () => {
        this.score.fineStart();
        this.flipping(itemCard);
      };
    }
  }

  setEventClickForStartBtn() {
    this.startBtn.onclick = () => {
      const memoryTable = getElementFromDOM("#game-page");
      const startTable = getElementFromDOM("#start-page");
      memoryTable.classList.remove("hide");
      startTable.classList.add("hide");
      this.start();
    };
  }

  setEventClickForPauseBtn() {
    const pauseBtn = getElementFromDOM("#btn-pause");
    const pauseTable = getElementFromDOM("#pause-page");
    pauseBtn.onclick = () => {
      this.score.fineStop();
      pauseTable.classList.remove("hide");
    };
  }

  setEventClickForContinueBtn() {
    const continueBtn = getElementFromDOM("#btn-continue");
    const pauseTable = getElementFromDOM("#pause-page");

    continueBtn.onclick = () => {
      this.score.fineStart();
      pauseTable.classList.add("hide");
    };
  }

  win() {
    const memoryTable = getElementFromDOM("#game-page");
    const endTable = getElementFromDOM("#end-page");
    const restartBtn = getElementFromDOM("#btn-restart");
    const finalScore = getElementFromDOM("#final-score");

    finalScore.innerText = this.score.score;
    memoryTable.classList.add("hide");
    endTable.classList.remove("hide");

    restartBtn.onclick = () => {
      memoryTable.classList.remove("hide");
      endTable.classList.add("hide");
      this.cleanTable();
      this.context.user.levelUp();
      this.start();
    };
  }

  cleanTable() {
    for (const item of this.context.table.cards) {
      item.card.remove();
    }
  }
}
