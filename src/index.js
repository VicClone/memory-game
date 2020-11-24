import Game from "./modules/Game.js";

const game = new Game();
game.initialGame();

/*class CoffeeMachine {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.waterAmount);*/
