export default class Score {
  constructor() {
    this.score = 0;
    this.scoreEl = document.getElementById('score');
    this.maxIncreaseValue = 5;
    this.increaseCount = this.maxIncreaseValue;
  }

  timerId = 0;

  renderScore() {
    this.scoreEl.innerText = this.score;
  }

  increase(count) {
    console.log(this.increaseCount);
    this.score += this.increaseCount;
    this.increaseCount = this.maxIncreaseValue;

    this.renderScore();
  }

  decrease() {
    console.log(this.increaseCount);
    this.increaseCount = this.maxIncreaseValue;

    if (this.score === 0) return;

    this.score -= 1;
    this.renderScore();
  }

  timerStart() {
    if (this.timerId !== 0) return;

    this.timerId = setInterval(() => {
      console.log(this.increaseCount, 'timer')
      this.increaseCount -= 1;
      console.log(this.timerId, 'timerId')

      if (this.increaseCount <= 1) this.timerStop();
    }, 1000);
  }

  timerStop() {
    console.log(this.timerId, 'stopId')
    clearInterval(this.timerId);
    this.timerId = 0;
  }
}