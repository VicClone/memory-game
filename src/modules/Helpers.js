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

function complexityGame(gameLevel) {
  if (gameLevel < 3) return 10; //20 default = сетка(5*4)
  if (gameLevel >= 3 && gameLevel < 5) {
    this.table.style.gridTemplateColumns = `repeat(6, 1fr)`;
    return 12;
  } //24 = сетка(4*6)
  if (gameLevel >= 5 && gameLevel < 7) {
    this.table.style.gridTemplateColumns = `repeat(6, 1fr)`;
    return 15;
  } //30 = сетка(6*5)
  if (gameLevel >= 7 && gameLevel < 9) {
    this.table.style.gridTemplateColumns = `repeat(6, 1fr)`;
    return 18;
  } //36 = сетка(6*6)
  if (gameLevel >= 9 && gameLevel < 12) {
    this.table.style.gridTemplateColumns = `repeat(8, 1fr)`;
    return 20;
  } //40 = сетка(8*5)
  if (gameLevel >= 12 && gameLevel < 14) {
    this.table.style.gridTemplateColumns = `repeat(7, 1fr)`;
    return 21;
  } //42 = сетка(6*7)
  if (gameLevel >= 14 && gameLevel < 16) {
    this.table.style.gridTemplateColumns = `repeat(8, 1fr)`;
    return 24;
  } //48 = сетка(6*8)
  if (gameLevel >= 16) {
    this.table.style.gridTemplateColumns = `repeat(8, 1fr)`;
    return 26;
  } //56 = сетка(8*7)
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
  complexityGame,
};
