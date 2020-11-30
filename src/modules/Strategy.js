import { getElementFromDOM, getRandomColor } from "./Helpers.js";

const getColorBg = function (counterGame) {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  const randomColor3 = getRandomColor();
  switch (counterGame) {
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
  const tableMesh = getElementFromDOM(".memory-game__table");
  switch (+gameLevel) {
    case undefined:
      return 10;
    case 1:
      return 10;
    case 2:
      tableMesh.style.gridTemplateColumns = "repeat(6, 1fr)";
      return 12; //24 = сетка(6*4)
    case 3:
      tableMesh.style.gridTemplateColumns = "repeat(6, 1fr)";
      return 15; //30 = сетка(6*5)
    case 4:
      tableMesh.style.gridTemplateColumns = "repeat(6, 1fr)";
      return 18; //36 = сетка(6*6)
    case 5:
      tableMesh.style.gridTemplateColumns = "repeat(8, 1fr)";
      return 20; //40 = сетка(8*5)
    case 6:
      tableMesh.style.gridTemplateColumns = "repeat(7, 1fr)";
      return 21; //42 = сетка(7*6)
    case 7:
      tableMesh.style.gridTemplateColumns = "repeat(8, 1fr)";
      return 24; //48 = сетка(8*6)
    case 8:
      tableMesh.style.gridTemplateColumns = "repeat(8, 1fr)";
      return 28; //56 = сетка(8*7)
    default:
      tableMesh.style.gridTemplateColumns = "repeat(8, 1fr)";
      return 28;
  }
};

export { getColorBg, getCardsInGame };
