import { getElementFromDOM } from '../Helpers.js';
import Score from '../Score.js';
import User from '../User.js';
import nextStepGame from './nextStepGame.js';
import Table from '../Table.js';
import Leaderboard from '../Leaderboard.js';
import cardsOnTheTable from './cardsOnTheTable.js';

export default async function (context, lastScore) {
  context.table = new Table();
  const score = new Score(lastScore);
  score.initialScore();
  context.leaderboard = new Leaderboard();

  const blockGuessed = getElementFromDOM('.cards-guesseding');
  blockGuessed.innerHTML = '';
  context.counterGames++;

  if (!context.user) {
    context.user = new User();
    context.user.getScore().then();
  }

  context.user.gameLevel = context.table.generatingMaps(
    context.user,
    context.counterGames
  );
  setEventClickForCards(context, score);
  context.guessedCards.length = 0;
  context.openCards.length = 0;

  setEventClickForPauseBtn(score);
  setEventClickForContinueBtn(score);

  cardsOnTheTable(context.table.cards);
  context.user.getInfoUser();
}

function setEventClickForCards(context, score) {
  for (const itemCard of context.table.cards) {
    itemCard.card.onclick = () => {
      score.fineStart();
      flipping(itemCard, context, score);
    };
  }
}

function flipping(card, context, score) {
  if (!card.flipped && context.openCards.length < 2) {
    card.flip();
    context.openCards.push(card);
  }
  if (context.openCards.length === 2) {
    context.state = 'compareCards';
    nextStepGame(context, score);
  }
}

function setEventClickForPauseBtn(score) {
  const pauseBtn = getElementFromDOM('#btn-pause');
  const pauseTable = getElementFromDOM('#pause-page');
  pauseBtn.onclick = () => {
    score.fineStop();
    score.stopTimerGame();
    pauseTable.classList.remove('hide');
  };
}

function setEventClickForContinueBtn(score) {
  const continueBtn = getElementFromDOM('#btn-continue');
  const pauseTable = getElementFromDOM('#pause-page');

  continueBtn.onclick = () => {
    score.fineStart();
    score.startTimerGame();
    pauseTable.classList.add('hide');
  };
}
