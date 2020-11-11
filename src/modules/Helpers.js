import Card from "./Card.js";

const board = document.getElementById("game-board");

function generatingMaps() {
  for (let i = 1; i <= this.pairsInGame; i++) {
    createTwoCards.call(this);
  }
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

function createTwoCards() {
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

function uniqueNum(array) {
  const num = randomOrder(1, 45);
  const check = array.filter((item) => item.name === num);
  if (check.length) {
    uniqueNum(array);
  }
  console.log(array);
  return num;
}

export { generatingMaps, randomOrder, flipBack };
