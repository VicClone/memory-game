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
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  }

  async render(leaders) {
    const leaderboardElement = document.getElementById('lidearboard');
    const leaderListElement = leaderboardElement.querySelector(
      '.lidearboard__list'
    );
    const leaderListItemElement = leaderboardElement.querySelector(
      '.lidearboard__list-item'
    );

    while (leaderListElement.children.length > 1) {
      leaderListElement.removeChild(leaderListElement.lastChild);
    }

    for (let i = 0; i < leaders.length; i++) {
      const leaderListItemCloneElement = leaderListItemElement.cloneNode(true);
      const userPositionElement = leaderListItemCloneElement.querySelector(
        '.lidearboard__position'
      );
      const userNameElement = leaderListItemCloneElement.querySelector(
        '.lidearboard__name'
      );
      const userScoreElement = leaderListItemCloneElement.querySelector(
        '.lidearboard__score'
      );

      userPositionElement.innerText = i + 1;
      userNameElement.innerText = leaders[i].name;
      userScoreElement.innerText = leaders[i].score;

      await leaderListElement.appendChild(leaderListItemCloneElement);
    }
  }

  async create() {
    await this.read().then((leaders) => {
      leaders.sort((a, b) => b.score - a.score);
      this.render(leaders);
    });
  }
}
