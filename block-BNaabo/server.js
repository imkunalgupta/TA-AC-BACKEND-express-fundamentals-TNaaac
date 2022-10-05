var express = require('express');
var app = express();
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extend: false }));

app.use(express.static(__dirname + '/public'));

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/gallery.html', (req, res) => {
  res.sendFile(__dirname + '/gallery.html');
});
app.post('/json', (req, res) => {
  // capture the data
  console.log(req.body);
});
app.post('/contact', (req, res) => {
  // capture the data
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
