// require modules
var express = require('express');

// global var
var db = require('../models'); // now use db as "database"
var router = express.Router();

// define routes - remember they are relative to /books
router.get('/', function(req, res){
  res.render('index');
});

// export router so other files can use it
module.exports = router;
