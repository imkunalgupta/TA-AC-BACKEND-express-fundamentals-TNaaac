var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/admin', (req, res, next) => {
  next('Unauthorized');
});

//routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

//404 error handler
app.use((req, res, next) => {
  res.send('Page not found');
});

//custom error handler
app.use((err, req, res, next) => {
  //res.status = 400
  res.status(500).send(err);
});

app.listen(4000, () => {
  console.log('Server listening on port 4k');
});
