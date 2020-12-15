import CardRender from './CardRender.js';
import guessedCard from './functions/guessedCard.js';

export default class Card {
  _bg = '';
  _flipped = false;
  _name = '';
  _img = '';
  _render = new CardRender();
  _card = this._render.card;

  constructor(name, img) {
    this._name = name;
    this._img = img;
  }

  get bg() {
    return this._bg;
  }

  get card() {
    return this._card;
  }
  get flipped() {
    return this._flipped;
  }

  generatingCard(backGround) {
    this._bg = this._render.generatingBgCard(backGround);
  }

  guessedCard(card) {
    guessedCard(card.card);
  }

  flip() {
    this._flipped = this._render.flipCard(this._flipped);
  }

  createElementCard(board) {
    this._render.createElement(board, this._img);
  }
}
