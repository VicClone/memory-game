import { getElementFromDOM } from './Helpers';

export default class Leaderboard {
  write(userName, score, level) {
    const player = {
      name: userName,
      score: score,
      level: level,
    };

    fetch('/leaderboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(player),
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  read() {
    return fetch('/leaderboard')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  }

  render(leaders) {
    const leaderboardElement = getElementFromDOM('#lidearboard');
    const leaderListElement = getElementFromDOM(
      '.lidearboard__list',
      leaderboardElement
    );
    const leaderListItemElement = getElementFromDOM(
      '.lidearboard__list-item',
      leaderboardElement
    );

    for (let i = 0; i < leaders.length; i++) {
      const leaderListItemCloneElement = leaderListItemElement.cloneNode(true);
      const userPositionElement = getElementFromDOM(
        '.lidearboard__position',
        leaderListItemCloneElement
      );
      const userNameElement = getElementFromDOM(
        '.lidearboard__name',
        leaderListItemCloneElement
      );
      const userScoreElement = getElementFromDOM(
        '.lidearboard__score',
        leaderListItemCloneElement
      );

      userPositionElement.innerText = i + 1;
      userNameElement.innerText = leaders[i].name;
      userScoreElement.innerText = leaders[i].score;

      leaderListElement.appendChild(leaderListItemCloneElement);
    }
  }

  create() {
    this.read().then((leaders) => {
      leaders.sort((a, b) => b.score - a.score);
      this.render(leaders);
    });
  }
}
