export default class Score {
  constructor() {
    this.score = 0;
    this.scoreEl = document.getElementById("score");
    this.maxIncreaseValue = 5;
    this.increaseCount = this.maxIncreaseValue;
  }

  timerId = 0;

  renderScore() {
    this.scoreEl.innerText = this.score;
  }

  increase(count) {
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

  timerStart() {
    if (this.timerId !== 0) return;

    this.timerId = setInterval(() => {
      this.increaseCount -= 1;

      if (this.increaseCount <= 1) this.timerStop();
    }, 1000);
  }

  timerStop() {
    clearInterval(this.timerId);
    this.timerId = 0;
  }
}
