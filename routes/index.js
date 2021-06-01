
const express=require("express");
const router=express.Router();
router.get('/', (req,res)=>{
  res.send('hi');
 
});
module.exports = router;

/*app.use('/', indexRouter);
app.use('/users', usersRouter);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/