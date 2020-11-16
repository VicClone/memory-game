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

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  const colorNameLength = 6;
  let color = "#";
  for (let i = 0; i < colorNameLength; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export { createFromTemplate, randomOrder, uniqueNum };
