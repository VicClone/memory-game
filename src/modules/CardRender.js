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
    const randomNum = randomOrder(0, 56);
    cardClone.style.order = randomNum;
    cardClone.style['z-index'] = randomNum;

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

  guessed(card) {
    const blockGuessed = getElementFromDOM(".cards-guesseding");
    const guessedCard = card.cloneNode(true);
    guessedCard.classList.add("guessedCard");
    guessedCard.style.width = "50px";
    guessedCard.style.height = "50px";
    guessedCard.style.order = 0;

    setTimeout(() => {
      blockGuessed.appendChild(guessedCard);
    }, 500);
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
