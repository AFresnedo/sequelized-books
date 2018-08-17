// require needed node modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');

// global variables
var app = express();
// ./ to tell it it's a folder and not a module name (sequilize is here too)
var db = require('./models');

// set and use statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

// define routes
app.get('/', function(req, res) {
  res.send('root has been reached');
});

// listen on port 3000
app.listen(3000, function(){
  console.log('port 3000 online');
});
