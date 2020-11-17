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

function uniqueNum(array) {
  const num = randomOrder(1, 45);
  const check = array.filter((item) => item.name === num);
  if (check.length) {
    return uniqueNum(array);
  }
  return num;
}

function cardsOnTheTable() {
  const arr = this.context.table.cards;
  function sortingOrder(a, b) {
    return a.card.style.order - b.card.style.order;
  }
  const newArr = arr.sort(sortingOrder);

  newArr.forEach(function (element, i) {
    setTimeout(function () {
      element.card.classList.remove("overseas");
    }, 100 * ++i);
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

export { createFromTemplate, randomOrder, uniqueNum, cardsOnTheTable };
