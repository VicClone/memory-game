import { getColorBg } from './Strategy.js';
import Card from './Card.js';
import Leaderboard from './Leaderboard.js';

function mapCards(gameLevel, counterGame, { pairsInGame, board }) {
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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  const colorNameLength = 6;
  let color = '#';
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
      table.querySelectorAll('.memory-game__card').forEach((el) => {
        el.style.width = `${size - pairs}px`;
        el.style.height = `${size - pairs}px`;
      });
  }
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getTimeStr(time) {
  const timeZoneOffsetInMiliseconds =
    new Date().getTimezoneOffset() * 60 * 1000;
  const date = new Date(time + timeZoneOffsetInMiliseconds);

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

async function readJsonUsers() {
  const leaderboard = new Leaderboard();
  const users = await leaderboard.read();
  const localId = localStorage.getItem('id');
  const user = users.filter((el) => el.id === localId)[0];
  if (!user) {
    return;
  }
  return user;
}

function colorNameInLeaderboard() {
  const leaderboardList = getElementFromDOM('.lidearboard__list');
  const leaderListItems = leaderboardList.querySelectorAll(
    '.lidearboard__list-item'
  );
  for (let item of leaderListItems) {
    const name = item.querySelector('.lidearboard__name');
    const nameLocal = localStorage.getItem('name');
    if (name.textContent === nameLocal) {
      item.style.backgroundColor = '#da7171';
    }
  }
}

export {
  randomOrder,
  uniqueNum,
  getRandomColor,
  mapCards,
  getElementFromDOM,
  setCardWidthHeight,
  uuid,
  getTimeStr,
  readJsonUsers,
  colorNameInLeaderboard,
};
