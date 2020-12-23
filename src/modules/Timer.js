export default class Timer {
  intervalStart(func, interalInMillisecond, ...args) {
    return setInterval(func, interalInMillisecond, ...args);
  }

  intervalStop(timerId) {
    clearInterval(timerId);
  }
}