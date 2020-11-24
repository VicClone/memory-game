import CardRender from "./CardRender.js";

export default class Card {
  _bg = "";
  _flipped = false;
  _name = "";
  _img = "";
  _render = new CardRender();
  _card = this._render.card;

  constructor(name, img) {
    this._name = name;
    this._img = img;
  }

  get bg() {
    return this._bg;
  }

  set bg(value) {
    this._bg = value;
  }

  get card() {
    return this._card;
  }

  flip() {
    if (!this._flipped) {
      this._card.classList.add("flip");
      this._flipped = !this._flipped;
    }
  }

  create(board) {
    this._render.setImgFront(this._img);
    board.appendChild(this._card);
  }

  removeCard() {
    this.card.removeChild();
  }
}
