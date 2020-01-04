var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ADD A PROMOCODE
router.post('/', )

// MAKE A PROMOCODE REQUEST
router.post('/request', (req, res, next) => {
    console.log(req.body);
    const checker = require('../controllers/promocode.js')
    checker(req.body);
})

module.exports = router;
