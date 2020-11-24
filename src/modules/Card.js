import CardRender from "./CardRender.js";

export default class Card {
  #bg = "";
  #flipped = false;
  #name = "";
  #img = "";
  #render = new CardRender();
  #card = this.#render.card;

  constructor(name, img) {
    this.#name = name;
    this.#img = img;
  }

  get bg() {
    return this.#bg;
  }

  get card() {
    return this.#card;
  }
  get flipped() {
    return this.#flipped;
  }

  generatingCard(backGround) {
    this.#bg = this.#render.generatingBgCard(backGround);
  }

  flip() {
    this.#flipped = this.#render.flipCard(this.#flipped);
  }

  createElementCard(board) {
    this.#render.createElement(board, this.#img);
  }
}
