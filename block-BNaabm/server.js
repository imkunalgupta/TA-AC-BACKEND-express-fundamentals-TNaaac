var express = require('express');
var app = express();

// function logger(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// }

// app.use(logger);
// or we can use below annoynomous middleware fn instead of above logger middleware fn

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(4000, () => {
  console.log('Server listeining on port 4000');
});
