const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this route will be used when a URL of /users/ is received.');
});

router.get('/cool/', function(req, res, next) {
  res.send('You are cool!')
})

module.exports = router;

//this route will be used when a URL of /users/ is received.