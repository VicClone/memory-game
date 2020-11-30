import { getColorBg } from "./Strategy.js";
import Card from "./Card.js";

function mapCards(gameLevel, counterGame, { pairsInGame, board }) {
  console.log(pairsInGame);
  let mapCards = [];
  for (let i = 1; i <= pairsInGame; i++) {
    let y = 0;
    const randomIdx = uniqueNum();
    const backGround = getColorBg(counterGame);
    do {
      const card = new Card(randomIdx, `${randomIdx}.png`);
      card.generatingCard(backGround);
      mapCards.push(card);
      card.createElementCard(board);
      y++;
    } while (y < 2);
  }
  return mapCards;
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

function cardsOnTheTable(cards) {
  const delay = 100;
  function sortingOrder(a, b) {
    return a.card.style.order - b.card.style.order;
  }
  const arrCards = cards.sort(sortingOrder);
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

function getElementFromDOM(identifier, parent = document) {
  return parent.querySelector(identifier);
}

function setCardWidthHeight(table, pairs) {
  const size = 136;
  switch (pairs) {
    case 10:
    case 11:
    case 12:
      break;
    default:
      table.querySelectorAll(".memory-game__card").forEach((el) => {
        el.style.width = `${size - pairs}px`;
        el.style.height = `${size - pairs}px`;
      });
  }
}

export {
  randomOrder,
  uniqueNum,
  cardsOnTheTable,
  getRandomColor,
  mapCards,
  getElementFromDOM,
  setCardWidthHeight,
};
