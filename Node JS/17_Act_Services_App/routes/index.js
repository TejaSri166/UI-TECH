const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const getDB = require('../database/database').getDB;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Raise Complaints page. */
router.get('/raise', function(req, res, next) {
    res.render('raise_complaint');
});

/* POSt Raise Complaints Form */
router.post('/raise', urlencodedParser ,function(req, res, next) {
    let complaint = req.body;
    // insert the complaints to database
    const db = getDB();
    db.collection('complaints').insertOne(complaint,(err , data) => {
        if(err) throw err;
    });
    res.render('raise_complaint');
});

/* GET List of Complaints page. */
router.get('/list', function(req, res, next) {
    // Fetch the data from database
    const db = getDB();
    db.collection('complaints').find({}).toArray((err,complaints) => {
        if(err){
            return console.log(err);
        }
        res.render('list_complaint' , { complaints : complaints});
    });

});


module.exports = router;
