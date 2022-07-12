const express = require('express');
const router = express.Router();
const Meal = require ('../mongoDB/models/meals')



router.get('/', function(req, res, next) {
    res.send();
});

module.exports = router;