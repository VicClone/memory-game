import { getElementFromDOM } from '../Helpers.js';
import nextStepGame from './nextStepGame.js';
import Leaderboard from '../Leaderboard.js';

export default async function (context, score) {
  const leaderboard = new Leaderboard();
  const player = context.user.userForLeaderboard();

  const memoryTable = getElementFromDOM('#game-page');
  const endTable = getElementFromDOM('#end-page');
  const restartBtn = getElementFromDOM('#btn-restart');
  const finalScore = getElementFromDOM('#final-score');
  const finalScoreAll = getElementFromDOM('#all-score');

  score.addFineTimeGame();

  finalScore.innerText = score.score;
  context.user.scoreUser = score.score;
  player.score = context.user.scoreUser;
  finalScoreAll.textContent = context.user.scoreUser;

  memoryTable.classList.add('hide');
  endTable.classList.remove('hide');

  await leaderboard.write(player);
  await leaderboard.create();

  restartBtn.onclick = () => {
    memoryTable.classList.remove('hide');
    endTable.classList.add('hide');
    context.state = 'cleanTable';
    nextStepGame(context, score);

    context.user.selectLevel(context.counterGames, score.score);
    context.state = 'start';
    nextStepGame(context, score);
  };
}
