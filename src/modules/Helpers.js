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

function uniqueNum() {
  const minNameImg = 1;
  const maxNameImg = 45;
  return randomOrder(minNameImg, maxNameImg);
}

function cardsOnTheTable() {
  const delay = 100;
  function sortingOrder(a, b) {
    return a.card.style.order - b.card.style.order;
  }
  const arrCards = this.context.table.cards.sort(sortingOrder);

  arrCards.forEach(function (element, i) {
    setTimeout(function () {
      element.card.classList.remove("overseas");
    }, delay * ++i);
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  const colorNameLength = 6;
  let color = "#";
  for (let i = 0; i < colorNameLength; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export {
  createFromTemplate,
  randomOrder,
  uniqueNum,
  cardsOnTheTable,
  getRandomColor,
};
