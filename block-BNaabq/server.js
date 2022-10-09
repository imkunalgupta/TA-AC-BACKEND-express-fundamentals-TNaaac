var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extened: false }));
app.use(cookieParser());

app.use('/about', (req, res, next) => {
  res.cookie('username', 'kunal');
  res.end('About Page');
  next();
});

app.use((req, res, next) => {
  console.log(req.cookies);
});

app.get('/', (req, res) => {
  res.send('kunal');
});

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
