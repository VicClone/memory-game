import Table from "./Table.js";
import User from "./User.js";
import Score from "./Score.js";
import Leaderboard from "./Leaderboard.js";
import { getElementFromDOM } from "./Helpers.js";

export default class Game {
  #context = {
    user: null,
    openCards: [],
    guessedCards: [],
    counterGames: 0,
    table: null,
  };
  #startBtn = getElementFromDOM("#btn-start");

  flipping(card) {
    if (!card.flipped && this.#context.openCards.length < 2) {
      card.flip();
      this.#context.openCards.push(card);
    }
    if (this.#context.openCards.length === 2) {
      this.compareCards();
    }
  }

  compareCards() {
    this.score.fineStop();
    if (
      this.#context.openCards[0].name + this.#context.openCards[0].bg !==
      this.#context.openCards[1].name + this.#context.openCards[1].bg
    ) {
      this.score.decrease(1);
      return setTimeout(() => {
        this.flipBack();
      }, 800);
    }

    this.score.increase();
    this.#context.guessedCards.push(...this.#context.openCards);
    this.#context.table.cards.length === this.#context.guessedCards.length
      ? setTimeout(() => {
          this.win();
        }, 500)
      : setTimeout(() => {
          this.removeCards();
        }, 500);
  }

  flipBack() {
    for (let item of this.#context.openCards) {
      item = item.flip();
    }
    this.#context.openCards.length = 0;
  }

  removeCards() {
    for (let item of this.#context.openCards) {
      item.guessedCard(item);
      item.card.classList.remove("flip");
      item.card.classList.add("guessed");
      item.active = !item.active;
    }
    this.#context.openCards.length = 0;
  }

  start() {
    this.#context.table = new Table();
    this.score = new Score();
    this.score.initialScore();
    const blockGuessed = getElementFromDOM(".cards-guesseding");
    blockGuessed.innerHTML = "";
    this.#context.counterGames++;

    if (!this.#context.user) {
      this.#context.user = new User();
    }

    this.#context.user.gameLevel = this.#context.table.generatingMaps(
      this.#context.user,
      this.#context.counterGames
    );
    this.setEventClickForCards(this.#context.table.cards);
    this.#context.guessedCards.length = 0;
    this.#context.openCards.length = 0;

    this.setEventClickForPauseBtn();
    this.setEventClickForContinueBtn();

    // this._cardsOnTheTable(this.#context.table.cards);
    this.#context.table.cardsOnTheTable();
    this.#context.user.getInfoUser();
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
    this.#startBtn.onclick = () => {
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
    const finalScoreAll = getElementFromDOM("#all-score");

    this.score.addFineTimeGame();

    finalScore.innerText = this.score.score;
    this.#context.user.scoreUser = this.score.score;
    finalScoreAll.textContent = this.#context.user.scoreUser;
    memoryTable.classList.add("hide");
    endTable.classList.remove("hide");

    const leaderboard = new Leaderboard();
    leaderboard.write(
      this.#context.user.name,
      this.#context.user.scoreUser,
      this.#context.user.gameLevel
    );

    restartBtn.onclick = () => {
      memoryTable.classList.remove("hide");
      endTable.classList.add("hide");
      this.cleanTable();

      this.#context.user.selectLevel(
        this.#context.counterGames,
        this.score.score
      );
      this.start();
    };
  }

  cleanTable() {
    for (const item of this.#context.table.cards) {
      item.card.remove();
    }
  }
}
