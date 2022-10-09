var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.json(req.body);
});

app.get('/users/:data', (req, res) => {
  var data = req.params.data;
  res.send(data);
});

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
