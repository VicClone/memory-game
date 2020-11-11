import { randomOrder } from "./Helpers.js";

export default class CardRender {
  card = createFromTemplate();

  setImgFront(image) {
    const frontImg = this.card.querySelector(".memory-game__card-front");
    frontImg.src = `img/${image}`;
  }
}

function createFromTemplate() {
  const cardTemplate = document.getElementById("card-template");
  const cardClone = cardTemplate.cloneNode(true);
  cardClone.removeAttribute("id");
  const orderForCard = randomOrder(0, 20);
  cardClone.setAttribute("style", `order:${orderForCard}`);

  return cardClone;
}
