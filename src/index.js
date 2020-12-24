import Game from './modules/Game.js';
import getInformations from './modules/functions/getInformations.js';
import { getElementFromDOM, readJsonUsers } from './modules/Helpers.js';

getInformations();
getLocalUser().then();

const game = new Game();
game.initialGame();

async function getLocalUser() {
  const userIdLocal = localStorage.getItem('id');
  if (userIdLocal) {
    const userInfo = await readJsonUsers();
    if (!userInfo) {
      return;
    }
    getElementFromDOM('.name').value = userInfo.name;
    getElementFromDOM('#level-game').value = userInfo.level;
  }
}
