var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());

app.use('/admin', (req, res, next) => {
  next('Unauthorized Access');
});

app.use((req, res, next) => {
  res.cookie('username', 'kunal');
  next();
});

//routes

app.get('/', (req, res) => {
  res.send('<h2>Welcome to Express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.get('/users/:username', (req, res) => {
  var userName = req.params.username;
  res.send(`<h2>${userName}</h2>`);
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.send(req.body);
});

//404 error
app.use((req, res, next) => {
  res.send('Page not Found');
});

//custom error
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
