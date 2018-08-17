// require needed node modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');

// global variables
var app = express();

// set and use statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.use('/books', require('./controllers/books'));

// define routes
app.get('/', function(req, res) {
  res.render('home');
});

// listen on port 3000
app.listen(3000, function(){
  console.log('port 3000 online');
});
