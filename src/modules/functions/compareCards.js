import nextStepGame from "./nextStepGame.js";

export default function (context, score) {
  score.fineStop();
  if (
    context.openCards[0].name + context.openCards[0].bg !==
    context.openCards[1].name + context.openCards[1].bg
  ) {
    score.decrease(1);
    return setTimeout(() => {
      context.state = "flipBack";
      nextStepGame(context, score);
    }, 800);
  }

  score.increase();
  context.guessedCards.push(...context.openCards);
  context.table.cards.length === context.guessedCards.length
    ? setTimeout(() => {
      context.state = "win";
      nextStepGame(context, score);
    }, 500)
    : setTimeout(() => {
      context.state = "removeCards";
      nextStepGame(context, score);
    }, 500);
}
