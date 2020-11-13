import Card from "./Card.js";

const board = document.getElementById("game-board");

function generatingMaps() {
  for (let i = 1; i <= this.pairsInGame; i++) {
    let y = 0;
    const randomIdx = uniqueNum(this.cards);
    do {
      const card = new Card(randomIdx, `${randomIdx}.png`);
      this.cards.push(card);
      card.create(board);
      card.card.onclick = () => {
        this.flipping(card);
      };
      y++;
    } while (y < 2);
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

function randomOrder(min = 0, max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function flipBack() {
  for (let item of this.openCards) {
    item.card.classList.remove("flip");
    item.fliped = !item.fliped;
  }
  this.openCards.length = 0;
}

function removeCards() {
  for (let item of this.openCards) {
    item.card.classList.remove("active");
    item.active = !item.active;
  }
  this.openCards.length = 0;
}

function uniqueNum(array) {
  const num = randomOrder(1, 45);
  const check = array.filter((item) => item.name === num);
  if (check.length) {
    return uniqueNum(array);
  }
  return num;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export {
  generatingMaps,
  createFromTemplate,
  randomOrder,
  flipBack,
  removeCards,
};
