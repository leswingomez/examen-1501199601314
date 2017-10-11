var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cuenta', function(req, res, next) {
  res.render('cuenta', {  });
});
router.get('/CalculadoraSencilla',function(req,res,next){
  res.render('Calculadora',{});
});

router.post('/CalculadoraSencilla',function(req,res,next){
  console.log(req.body);
  res.render('Calculadora',req.body);
});

module.exports = router;
