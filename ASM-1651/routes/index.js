var express = require('express');
var router = express.Router();
var ToysModel = require('../models/ToysModel');
var BrandModels = require('../models/BrandModels');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
