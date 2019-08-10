const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let employees = [];

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Express PUG' , page : 'home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('about', { pageTitle: 'About Us' , page : 'about' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { pageTitle: 'Contact Us' , page : 'contact' , employees: employees });
});

/* POSt Contact page Registration form. */
router.post('/register', urlencodedParser , function(req, res, next) {
    let employee = req.body;
    employees.push(employee);
    res.render('contact', { pageTitle: 'Contact Us' , page : 'contact' , employees: employees });
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
    let employees = [{name:'Rajan',age:40,designation:'Business Manager',active:!0},{name:'John',age:35,designation:'Project Manager',active:!1},{name:'Wilson',age:25,designation:'Software Engineer',active:!0},{name:'Naveen',age:23,designation:'Software Trainee',active:!1}];
    res.render('services', { pageTitle: 'Services We Provide' , page : 'services' , employees : employees });
});

module.exports = router;
