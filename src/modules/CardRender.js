import { getElementFromDOM, randomOrder } from "./Helpers.js";

export default class CardRender {
  #card = this._createFromTemplate();

  get card() {
    return this.#card;
  }

  _createFromTemplate() {
    const cardTemplate = getElementFromDOM("#card-template");
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.removeAttribute("id");
    cardClone.style.order = randomOrder(0, 20);

    return cardClone;
  }

  _setFront(image) {
    const frontImg = getElementFromDOM(".memory-game__card-front", this.#card);
    frontImg.src = `img/${image}`;
  }

  generatingBgCard(backGround) {
    const frontBg = getElementFromDOM(".memory-game__card-front", this.#card);
    frontBg.style.background = backGround;
    return backGround;
  }

  createElement(board, img) {
    this._setFront(img);
    board.appendChild(this.#card);
  }

  flipCard(flipped) {
    if (!flipped) {
      this.#card.classList.add("flip");
      flipped = !flipped;
      return flipped;
    }
    this.#card.classList.remove("flip");
    flipped = !flipped;
    return flipped;
  }
}
