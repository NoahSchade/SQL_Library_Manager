var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/books")
});

router.get(/^(?!.*\/books)/, function(req, res, next) {
  res.render('books/page-not-found');
});

router.get(/^((\/books\/books\/new).*)$/, function(req, res, next) {
  res.redirect("/books/new")
});

// router.get(/^((?!\/books).)+|((\/books\/books).*)$/, function(req, res, next) {
//   res.redirect("/books")
// });

module.exports = router;
