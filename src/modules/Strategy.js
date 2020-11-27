import { getRandomColor } from "./Helpers.js";

const getColorBg = function (gameLevel) {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  const randomColor3 = getRandomColor();

  switch (gameLevel) {
    case undefined:
      return randomColor1;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
    case 13:
    case 15:
      return randomColor1;
    default:
      return `linear-gradient(120deg, ${randomColor1} 0%, ${randomColor2} 50%,  ${randomColor3} 100%)`;
  }
};

const getCardsInGame = function (gameLevel) {
  switch (gameLevel) {
    case undefined:
      return 10;
    case 1:
    case 2:
      return 10;
    case 3:
    case 4:
      return 12; //24 = сетка(4*6)
    case 5:
    case 6:
      return 15; //30 = сетка(6*5)
    case 7:
    case 8:
      return 18; //36 = сетка(6*6)
    case 9:
    case 10:
      return 20; //40 = сетка(8*5)
    case 11:
    case 12:
      return 21; //42 = сетка(7*6)
    case 13:
    case 14:
      return 24; //48 = сетка(8*6)
    case 15:
    case 16:
      return 28; //56 = сетка(8*7)
    default:
      return 28;
  }
};

export { getColorBg, getCardsInGame };