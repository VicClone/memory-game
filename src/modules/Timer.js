export default class Timer {
  #intervalId = 0;
  #timerGameId= 0;

  intervalStart(func, interalInMillisecond, ...args) {
    if (this.#intervalId !== 0) return;

    this.#intervalId = setInterval(func, interalInMillisecond, ...args);
  }

  intervalStop() {
    clearInterval(this.#intervalId);
    this.#intervalId = 0;
  }

  getCurrentTime() {
    return new Date();
  }
}