import { randomOrder } from "./Helpers.js";

export default class CardRender {
  #card = this._createFromTemplate();

  get card() {
    return this.#card;
  }

  _createFromTemplate() {
    const cardTemplate = document.getElementById("card-template");
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.removeAttribute("id");
    const orderForCard = randomOrder(0, 20);
    cardClone.setAttribute("style", `order:${orderForCard}`);

    return cardClone;
  }

  setImgFront(image) {
    const frontImg = this.#card.querySelector(".memory-game__card-front");
    frontImg.src = `img/${image}`;
  }

  generatingBgCard(backGround) {
    const frontBg = this.#card.querySelector(".memory-game__card-front");
    frontBg.style.background = backGround;
    return backGround;
  }

  createElement(board, img) {
    this.setImgFront(img);
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
