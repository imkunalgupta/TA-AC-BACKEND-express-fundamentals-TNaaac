var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/admin', (req, res, next) => {
  next('unauthorized');
});

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.use((req, res, next) => {
  res.send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('Server listening on port 4k');
});
