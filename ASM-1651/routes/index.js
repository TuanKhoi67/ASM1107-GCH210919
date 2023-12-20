var express = require('express');
var router = express.Router();
var ToysModel = require('../models/ToysModel');
var BrandModels = require('../models/BrandModels');


/* GET home page. */
router.get('/', async (req, res) => {
  var toys = await ToysModel.find({}).populate('brand');
  res.render('index', { toys });
})

router.post('/search', async (req, res) => {
  var keyword = req.body.keyword;
  var toys = await ToyModel.find({ name: new RegExp(keyword , "i") });
  res.render('index', { toys })
})
module.exports = router;
