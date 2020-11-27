import Timer from "./Timer.js";

export default class Score {
  constructor() {
    this.score = 0;
    this.scoreEl = document.getElementById("score");
    this.maxIncreaseValue = 5;
    this.increaseCount = this.maxIncreaseValue;
  }

  timerId = 0;
  #timer = null;

  initialScore() {
    this.#timer = new Timer();
  }

  renderScore() {
    this.scoreEl.innerText = this.score;
  }

  increase() {
    this.score += this.increaseCount;
    this.increaseCount = this.maxIncreaseValue;

    this.renderScore();
  }

  decrease() {
    this.increaseCount = this.maxIncreaseValue;

    if (this.score === 0) return;

    this.score -= 1;
    this.renderScore();
  }

  fineStart() {
    this.#timer.intervalStart(this._fine, 1000, this);
  }

  fineStop() {
    this.#timer.intervalStop()
  }

  _fine(context) {
    console.log(context.increaseCount);
    if (context.increaseCount <= 1) {
      context.#timer.intervalStop();
    }

    context.increaseCount -= 1;
  }
}
