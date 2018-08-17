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

router.get('/new', function(req, res) {
  res.render('books/new');
});

router.post('/', function(req, res) {
  // // below was shorthand for this (because of name= in form):
  // db.book.create({
    // title: req.body.title,
    // author: req.body.author,
    // pages: req.body.pages
  // });
  // so body is the thing sent by the form directly (no ajax)
  db.book.create(req.body).then(function(createdBook) {
    res.redirect('/books');
  }).catch(function(err) {
    console.log('posting error', err);
    res.send('beautiful 404');
  });
});

router.get('/:id', function(req, res) {
  db.book.findById(req.params.id).then(function(foundBook){
    res.send(foundBook);
  }).catch(function(err){
    console.log('err', err);
    res.send('horrible 404 page, beware!');
  });
});

// export router so other files can use it
module.exports = router;
