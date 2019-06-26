var express = require('express');
var router = express.Router();
var Book = require("../models").Book;

/* GET books listing. */
router.get('/', function(req, res, next) {
  Book.findAll({order: [["createdAt", "DESC"]]}).then(function(books){
    res.render("books/index", {books: books, title: "Books" });
  }).catch(function(err){
    res.send(500);
  });
});

/* POST create book. */
router.post('/', function(req, res, next) {
  Book.create(req.body).then(function(book) {
    res.redirect('/books');
  }).catch(function(err){
    if(err.name === "SequelizeValidationError"){
      res.render('books/new-book', {
        book: Book.build(req.body), 
        title: 'New Book',
        errors: err.errors
      });
    } else {
      throw err;
    }
  }).catch(function(err){
    res.send(500);
  });
});

/* Create a new book form. */
router.get('/new', function(req, res, next) {
  res.render('books/new-book', {book: Book.build(), title: 'New Book'});
});

/* Edit book form. */
router.get('/:id/edit', function (req, res, next) {
  Book.findByPk(req.params.id).then((book) => {
    if(book) {
      res.render('books/edit', { book: book, title: 'Edit Book' });
    } else {
      res.send(404);
    }
  }).catch(function(err){
    res.send(500);
  });
});


/* Delete book form. */
router.get('books/:id/delete', function (req, res, next) {
  Book.findByPk(req.params.id).then((book) => {
    if(book){
      res.render('books/delete', { book: book, title: 'Delete Book' });
    } else {
      res.send(404);
    }
  }).catch(function(err){
    res.send(500);
  });
});


/* GET individual book. */
router.get('/:id', function(req, res, next) {
  Book.findByPk(req.params.id).then((book) => {
    if(book) {
    res.render('books/update-book', { book: book, title: 'Update Book' });
    } else {
      res.send(404);
    }
  }).catch(function(err){
    res.send(500);
  });
});

/* PUT update book. */
router.put('/:id', function (req, res, next) {
  Book.findByPk(req.params.id).then((book) => {
    if(book) {
      return book.update(req.body);
    } else {
      res.send(404);
    }
  }).then((book) => {
    res.redirect('/books');
  }).catch(function(err){
    if(err.name === "SequelizeValidationError"){
      var book = Book.build(req.body);
      book.id = req.params.id;

      res.render('books/update-book', {
        book: book, 
        title: 'Edit Book',
        errors: err.errors
      });
    } else {
      throw err;
    }
  }).catch(function(err){
    res.send(500);
  });
});

/* DELETE individual book. */
router.delete('/:id', function (req, res, next) {
  Book.findByPk(req.params.id).then((book) => {
    if(book) {
      return book.destroy();
    } else {
      res.send(404);
    }
  }).then(() => {
    res.redirect('/books');
  }).catch(function(err){
    res.send(500);
  });
});


module.exports = router;