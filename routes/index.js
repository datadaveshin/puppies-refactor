var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('site/index', { title: 'Express' });
});

//What to display in localhost:8000/about
router.get('/about', function(req, res){
 res.render('site/about');
});

//What to display in localhost:8000/contact
router.get('/contact', function(req, res){
 res.render('site/contact');
});

module.exports = router;
