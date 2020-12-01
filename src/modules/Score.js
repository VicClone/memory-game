import Timer from "./Timer.js";
import { getElementFromDOM } from "./Helpers.js";

export default class Score {
  constructor() {
    this.score = 0;
    this.scoreEl = getElementFromDOM("#score");
    this.maxIncreaseValue = 5;
    this.increaseCount = this.maxIncreaseValue;
  }

  timerId = 0;
  #timer = null;
  #timeStartGame = 0;

  initialScore() {
    this.#timer = new Timer();
    this.#timeStartGame = new Date();
  }

  renderScore() {
    this.scoreEl.innerText = this.score;
  }

  increase() {
    this.score += this.increaseCount;
    this.increaseCount = this.maxIncreaseValue;

    this.renderScore();
  }

  decrease(value) {
    this.increaseCount = this.maxIncreaseValue;
    const scoreDecrease = this.score - value;

    this.score = scoreDecrease > 0 ? scoreDecrease : 0;

    this.renderScore();
  }

  fineStart() {
    this.#timer.intervalStart(this._fine, 1000, this);
  }

  fineStop() {
    this.#timer.intervalStop()
  }

  _fine(context) {
    if (context.increaseCount <= 1) {
      context.#timer.intervalStop();
    }

    context.increaseCount -= 1;
  }

  addFineTimeGame() {
    const timeEndGame = new Date();
    const timeGameInMinute = Math.floor((timeEndGame - this.#timeStartGame) / (1000 * 60));
    console.log(timeGameInMinute, 'minutes in game')

    this.decrease(timeGameInMinute);
  }
}
