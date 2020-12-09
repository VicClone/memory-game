const { request, response } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const jsonParser = express.json();

app.post('/leaderboard', jsonParser, (request, response) => {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  addInJSON('leaderboard.json', request.body);

  response.json(request.body);
});

app.get('/leaderboard', jsonParser, (request, response) => {
  readJSON('leaderboard.json')
    .then((result) => {
      response.send(result);
    })
    .catch((error) => response.send(error));
});

app.use(express.static(__dirname + '/src/'));

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

function addInJSON(fileName, data) {
  try {
    if (fs.existsSync(fileName)) {
      const read = readJSON(fileName);
      read.then((result) => {
        writeJSON(fileName, [...result, data]);
      });
    } else {
      writeJSON(fileName, [data]);
    }
  } catch (err) {
    console.error(err);
  }
}

function writeJSON(fileName, data) {
  fs.writeFileSync(fileName, JSON.stringify(data));
}

function readJSON(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
}
