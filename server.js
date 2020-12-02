const { request, response } = require('express');
const express = require('express');

const app = express();
const port = 3000;

const jsonParser = express.json();

app.post('/leaderboard', jsonParser, (request, response) => {
  console.log(request.body);

  if (!request.body) return response.sendStatus(400);

  response.json(request.body);
});

// app.use(function (request, response) {
//   response.sendFile(__dirname + "/src/index.html");
// });

app.use(express.static(__dirname + '/src/'));

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});