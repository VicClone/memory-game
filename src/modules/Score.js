import Timer from "./Timer.js";
import { getElementFromDOM, getTimeStr } from "./Helpers.js";

export default class Score {
  constructor(score) {
    this.score = 0;
    this.scoreEl = getElementFromDOM("#score");
    this.timeEl = getElementFromDOM("#time");
    this.maxIncreaseValue = 5;
    this.increaseCount = this.maxIncreaseValue;
    this.timeGame = score && score.timeGame ? score.timeGame : 0;
  }
  
  _timerFineId = 0;
  _timerFine = null;
  _timeStartGame = 0;
  _timerGameId = 0;
  
  initialScore() {
    this.scoreEl.textContent = 0;
    this._timerFine = new Timer();
    this._timerGame = new Timer();
    this._timeStartGame = new Date();
    this.startTimerGame();
  }

  _renderScore() {
    this.scoreEl.innerText = this.score;
  }

  _renderTime(timeStr) {
    this.timeEl.innerText = timeStr;
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

    this._timerFineId = this._timerFine.intervalStart(this._fine, 1000, this);
  }

  fineStop() {
    this._timerFine.intervalStop(this._timerFineId);
    this._timerFineId = 0;
  }

  _fine(context) {
    if (context.increaseCount <= 1) {
      context.fineStop();
    }
    
    console.log(context.increaseCount);

    context.increaseCount -= 1;
  }

  addFineTimeGame() {
    const timeEndGame = new Date();
    const timeGameInMinute = Math.floor((timeEndGame - this._timeStartGame) / (1000 * 60));

    this.decrease(timeGameInMinute);
  }

  startTimerGame() {
    this._timerGameId = this._timerGame.intervalStart(this.timerStep, 1000, this);
  }

  stopTimerGame() {
    this._timerGame.intervalStop(this._timerGameId);
  }

  timerStep(context) {
    context.timeGame += 1000;
    const timeStr = getTimeStr(context.timeGame);
    context._renderTime(timeStr);
  }
}
