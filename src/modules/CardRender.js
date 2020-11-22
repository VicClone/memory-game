import { createFromTemplate } from "./Helpers.js";

export default class CardRender {
  card = createFromTemplate();

  setImgFront(image) {
    const frontImg = this.card.querySelector(".memory-game__card-front");
    frontImg.src = `img/${image}`;
  }
}
