const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const server = app
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

let request;

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());

app.get('/', function(req, res) {
  res.send("essa");
});

app.post("/es", (req, res) => {
  request = req.body.es;
  res.send(req.body.es);
});

app.get('/requests', function(req, res) {
  res.send(request);
});

app.post("/delete", (req, res) => {
  request = "";
});