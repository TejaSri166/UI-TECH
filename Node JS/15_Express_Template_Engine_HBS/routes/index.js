const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Express HBS' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { pageTitle: 'About Us' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { pageTitle: 'Our Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { pageTitle: 'Contact Us' });
});

module.exports = router;
