import { getElementFromDOM } from '../Helpers.js';

export default function (card) {
  const blockGuessed = getElementFromDOM('.cards-guesseding');
  const guessedCard = card.cloneNode(true);
  guessedCard.classList.add('guessedCard');
  guessedCard.style.width = '50px';
  guessedCard.style.height = '50px';
  guessedCard.style.order = 0;

  setTimeout(() => {
    blockGuessed.appendChild(guessedCard);
  }, 500);
}
