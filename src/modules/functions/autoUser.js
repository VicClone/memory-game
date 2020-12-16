import { getElementFromDOM } from '../Helpers.js';

export default function () {
  const containerForCard = getElementFromDOM('.memory-game__table');
  const allCards = containerForCard.querySelectorAll('.memory-game__card');

  allCards.forEach((el, i) => {
    setTimeout(() => {
      el.click();
    }, 800 * ++i);
  });
}
