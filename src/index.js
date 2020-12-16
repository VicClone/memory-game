import Game from './modules/Game.js';
import getInformations from './modules/functions/getInformations.js';
import { getElementFromDOM } from './modules/Helpers.js';

getInformations();
getLocalUser();

const game = new Game();
game.initialGame();

function getLocalUser() {
  const localUser = localStorage.getItem('nameUser');
  if (localUser) {
    getElementFromDOM('.name').value = localUser;
  }
}
