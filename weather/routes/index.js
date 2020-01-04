var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status.send({
    "is": "clear",
    "temp": 20
  })
});

module.exports = router;
