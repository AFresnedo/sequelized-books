// require modules
var express = require('express');

// global var
var db = require('../models'); // now use db as "database"
var router = express.Router();

// define routes - remember they are relative to /books
router.get('/', function(req, res){
  // define some code to run when db returns the query
  // "then" because it's async
  // "books" is the data returned, in this case an array of all items
  db.book.findAll().then(function(books){
    console.log('books returned:', books);
    // this is INSIDE of the promise because otherwise it will render before
    // data arrives
    // relative to /views but not /books
    res.render('books/index', { books: books });

    // omg a then, catch!!!
  }).catch(function(err) {
    console.log('findAll books failed', err)
    res.send('this is my 404, iz very nice');
  });
});

// export router so other files can use it
module.exports = router;
