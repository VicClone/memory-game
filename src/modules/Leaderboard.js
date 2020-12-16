import { getElementFromDOM } from './Helpers.js';

export default class Leaderboard {
  async write(player) {
    await fetch('/leaderboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(player),
    })
      .then((response) => response)
      .catch((error) => console.error(error));
  }

  async read() {
    return await fetch('/leaderboard')
      .then((response) => {
        return response.json();
      })
      .then((data) => data)
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

    while (leaderListElement.children.length > 1) {
      leaderListElement.removeChild(leaderListElement.lastChild);
    }

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

  async create() {
    await this.read().then((leaders) => {
      leaders.sort((a, b) => b.score - a.score);
      this.render(leaders);
    });
  }
}
