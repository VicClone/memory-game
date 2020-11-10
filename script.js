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
    if (!this.fliped && game.openCards.length < 2) {
      this.card.classList.add("flip");
      this.fliped = !this.fliped;
      game.openCards.push(this);
    }
    if (game.openCards.length === 2) {
      game.compareCards();
    }
  }

  create(board) {
    this.render.setImgFront(this.img);
    board.appendChild(this.card);

    this.card.onclick = () => {
      this.flip();
    };
  }
}

class Game {
  constructor() {
    this.cards = [];
    this.openCards = [];
    this.cardsInGame = 10;
  }

  compareCards() {
    if (this.openCards[0].name !== this.openCards[1].name) {
      return setTimeout(() => {
        flipBack.call(this);
      }, 500);
    }
  }

  start() {
    generatingMaps.call(this);
  }
}

function createFromTemplate() {
  const cardTemplate = document.getElementById("card-template");
  const cardClone = cardTemplate.cloneNode(true);
  cardClone.removeAttribute("id");
  const orderForCard = randomOrder(20);
  cardClone.setAttribute("style", `order:${orderForCard}`);

  return cardClone;
}

function generatingMaps() {
  for (let i = 1; i <= this.cardsInGame; i++) {
    let y = 0;
    do {
      const card = new Card(i, `${i}.png`);
      this.cards.push(card);
      card.create(board);
      y++;
    } while (y < 2);
  }
  console.log(this.cards);
}

function flipBack() {
  for (let item of this.openCards) {
    item.card.classList.remove("flip");
    item.fliped = !item.fliped;
  }
  this.openCards.length = 0;
}

const randomOrder = (max) => {
  const min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const game = new Game();
game.start();
