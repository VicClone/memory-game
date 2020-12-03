export default class Leaderboard {
  async write(userName, score, level) {
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
}
