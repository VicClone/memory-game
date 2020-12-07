export default class Leaderboard {
  write(userName, score, level) {
    const player = {
      name: userName,
      score: score,
      level: level,
    };

    fetch("/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(player),
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  read() {
    return fetch("/leaderboard")
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch((error) => console.error(error));
  }

  render(leaders) {
    const leaderboardElement = document.getElementById('lidearboard');
    const leaderListElement =  leaderboardElement.querySelector('.lidearboard__list');
    const leaderListItemElement =  leaderboardElement.querySelector('.lidearboard__list-item');

    

    for (let i = 0; i < leaders.length; i++) {
      const leaderListItemCloneElement = leaderListItemElement.cloneNode(true);
      const userPositionElement = leaderListItemCloneElement.querySelector('.lidearboard__position');
      const userNameElement = leaderListItemCloneElement.querySelector('.lidearboard__name');
      const userScoreElement = leaderListItemCloneElement.querySelector('.lidearboard__score');
      
      userPositionElement.innerText = i + 1;
      userNameElement.innerText = leaders[i].name;
      userScoreElement.innerText = leaders[i].score;

      leaderListElement.appendChild(leaderListItemCloneElement);
    }
  }

  create() {
    this.read()
      .then(leaders => {
          leaders.sort((a, b) => b.score - a.score);

          this.render(leaders);
      });
  }
}
