var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

app.use((req, res, next) => {
  res.cookie('username', 'Kunal');
  next();
});

app.use('/admin', (req, res, next) => {
  next('Unauthorized Access');
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cookieParser());

//routs
// app.get('/', (req, res) => {
//   res.send('welcome');
// });

// app.get('/users', (req, res) => {
//   res.send('Uers Page');
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/project', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});

//error
app.use((req, res, next) => {
  res.send('Page not Found');
});

//custom error

app.listen(4000, () => {
  console.log('Server listening port on 4k');
});
