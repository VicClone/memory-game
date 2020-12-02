export default class Leaderboald {
  async write(nameUser, score) {
    const user = {
      name: 'vasya',
      score: 2000
    };

    fetch('/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }
}