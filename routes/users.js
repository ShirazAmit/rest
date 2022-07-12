const express = require('express');
const router = express.Router();
const users = require('../lib/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(users.users);
});



module.exports = router;