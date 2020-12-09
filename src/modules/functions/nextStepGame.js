import compareCards from "./compareCards.js";
import win from "./userWin.js";
import start from "./gameStart.js";

export default function (context, score) {
  switch (context.state) {
    case "start":
      return start(context, score);
    case "compareCards":
      return compareCards(context, score);
    case "win":
      return win(context, score);
    case "flipBack":
      return flipBack(context, score);
    case "removeCards":
      return removeCards(context);
    case "cleanTable":
      return cleanTable(context);
  }
}

function cleanTable(context) {
  for (const item of context.table.cards) {
    item.card.remove();
  }
}

function flipBack(context) {
  for (let item of context.openCards) {
    item = item.flip();
  }
  context.openCards.length = 0;
}

function removeCards(context) {
  for (let item of context.openCards) {
    item.guessedCard(item);
    item.card.classList.remove("flip");
    item.card.classList.add("guessed");
    item.active = !item.active;
  }
  context.openCards.length = 0;
}
