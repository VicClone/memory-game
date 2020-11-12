const board = document.getElementById("game-board");

class CardRender {
  card = createFromTemplate();

  setImgFront(image) {
    const frontImg = this.card.querySelector(".memory-game__card-front");
    frontImg.src = `src/${image}`;
  }
}

class Card {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.fliped = false;
  }

  render = new CardRender();
  card = this.render.card;

  flip() {
    this.card.classList.toggle("flip");
    this.fliped = !this.fliped;
  }

  create(board) {
    this.render.setImgFront(this.img);
    board.appendChild(this.render.card);
  }
}

class Game {
  constructor() {
    this.cards = [];
    this.openCards = [];
    this.pairsInGame = 10;
  }

  flipping(card) {
    if (!card.fliped && this.openCards.length < 2) {
      card.flip();
      this.openCards.push(card);
    }
    if (this.openCards.length === 2) {
      this.compareCards();
    }
  }

  compareCards() {
    if (this.openCards[0].name !== this.openCards[1].name) {
      return setTimeout(() => {
        flipBack.call(this);
      }, 500);
    }
    return setTimeout(() => {
      removeCards(this);
    }, 500);
  }

  start() {
    generatingMaps.call(this);
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

function removeCards() {
  for (let item of this.openCards) {
    item.card.classList.remove("active");
    item.active = !item.active;
  }
  this.openCards.length = 0;
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

function uniqueNum(array) {
  const num = randomOrder(1, 45);
  const check = array.filter((item) => item.name === num);
  if (check.length) {
    uniqueNum(array);
  }
  return num;
}

const game = new Game();
game.start();
