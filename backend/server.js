const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const server = app
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


app.get('/', function(req, res) {
  res.send('Hello World!');
});