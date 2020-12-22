import Timer from "./Timer.js";
import { getElementFromDOM } from "./Helpers.js";

export default class Score {
  constructor() {
    this.score = 0;
    this.scoreEl = getElementFromDOM("#score");
    this.maxIncreaseValue = 5;
    this.increaseCount = this.maxIncreaseValue;
  }

  _timerFineId = 0;
  _timer = null;
  _timeStartGame = 0;

  initialScore() {
    this.scoreEl.textContent = 0;
    this._timer = new Timer();
    this._timeStartGame = new Date();
  }

  _renderScore() {
    this.scoreEl.innerText = this.score;
  }

  increase() {
    this.score += this.increaseCount;
    this.increaseCount = this.maxIncreaseValue;

    this._renderScore();
  }

  decrease(value) {
    this.increaseCount = this.maxIncreaseValue;
    const scoreDecrease = this.score - value;

    this.score = scoreDecrease > 0 ? scoreDecrease : 0;

    this._renderScore();
  }

  fineStart() {
    if (this._timerFineId !== 0) return;

    this._timerFineId = this._timer.intervalStart(this._fine, 1000, this);
  }

  fineStop() {
    this._timer.intervalStop(this._timerFineId);
    this._timerFineId = 0;
  }

  _fine(context) {
    // console.log(context.fineStop);
    if (context.increaseCount <= 1) {
      context.fineStop();
    }
    
    console.log(context.increaseCount);

    context.increaseCount -= 1;
  }

  addFineTimeGame() {
    const timeEndGame = new Date();
    const timeGameInMinute = Math.floor((timeEndGame - this._timeStartGame) / (1000 * 60));
    console.log(timeGameInMinute, 'minutes in game')

    this.decrease(timeGameInMinute);
  }
}
