const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const server = app
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/es', function(req, res) {
  res.send('essasito');
});

