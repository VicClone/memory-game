import CardRender from "./CardRender.js";

export default class Card {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.fliped = false;
  }

  render = new CardRender();
  card = this.render.card;

  flip() {
    if (!this.fliped) {
      this.card.classList.add("flip");
      this.fliped = !this.fliped;
    }
  }

  create(board) {
    this.render.setImgFront(this.img);
    board.appendChild(this.card);
  }
}
