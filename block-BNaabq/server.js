var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });
app.use(logger('dev'));

app.use(cookieParser());

app.use((req, res, next) => {
  var count = req.cookies.count;
  if (count) {
    res.cookie('username', 'kunal');
  } else {
    res.cookie('count', 1);
  }
  console.log(count);

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extened: false }));

app.get((req, res) => {
  res.send('Welcome');
});
app.get('/', (req, res) => {
  res.send('kunal');
});

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
