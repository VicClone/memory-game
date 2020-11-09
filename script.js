class CardRender {

  card = createFromTemplate();

  setImgFront(image) {
    const frontImg = this.card.querySelector('.memory-game__card-front');
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
    this.card.classList.toggle('flip');
    this.fliped = !this.fliped;
  }

  create(board) {
    this.render.setImgFront(this.img);
    board.appendChild(this.render.card);

    this.card.onclick = () => {
      this.flip();
    }
  }

}

function createFromTemplate() {
  const cardTemplate = document.getElementById('card-template');
  const cardClone = cardTemplate.cloneNode(true);
  cardClone.removeAttribute('id');

  return cardClone;
}


const board = document.getElementById('game-board');

const cardCat = new Card('cat', 'cat.png');
cardCat.create(board);

const cardDog = new Card('dog', 'dog.png');
cardDog.create(board);