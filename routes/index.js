var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var name = req.body.name;
  var firstName = req.body.firstName;
  var age = req.body.age;
 
  console.log(name + ' ' + firstName+ ' ' + age);
  
 // res.send(name + ' ' + firstName + ' ' + age);
  


});


module.exports = router;
