const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { check , validationResult } = require('express-validator/check');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  let errors = [ { location: '',
      param: '',
      value: '',
      msg: '' }];
    let user = {
        email: '',
        password: '',
        c_password: ''
    };
      res.render('index' , {errors : errors , user : user});
});

/* POST Registration Form. */
router.post('/register', [
    check('email').isEmail(),
    check('password').isLength({min : 5}),
    check('c_password').custom((value , {req}) => {
        if(value !== req.body.password){
            throw new Error('Both the passwords not Matched');
        }
        return true;
    })
    ], urlencodedParser ,function(req, res, next) {
    let user = {
        email: req.body.email,
        password: req.body.password,
        c_password: req.body.c_password
    };
    let errors = validationResult(req);
    res.render('index',{errors : errors.array() , user : user});
});

module.exports = router;
