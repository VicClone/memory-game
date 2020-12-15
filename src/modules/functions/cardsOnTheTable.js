export default function (cards) {
  const delay = 100;
  function sortingOrder(a, b) {
    return a.card.style.order - b.card.style.order;
  }
  const arrCards = cards.sort(sortingOrder);
  arrCards.forEach(function (element, i) {
    setTimeout(function () {
      element.card.classList.remove('overseas');
    }, delay * ++i);
  });
}
