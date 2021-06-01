const express=require("express")
const router=express.Router();


router.get('/', (req,res)=>{
  res.sendFile(__dirname +'/public/index.html');
 
});
//Route to About page
router.get('/about', (req,res)=>{
  res.sendFile(__dirname +'/public/about.html');
});
//Route to Menu page
router.get('/menu', (req,res)=>{
  res.sendFile(__dirname +'/public/menu.html');
});
//Route to faq page
router.get('/faq', (req,res)=>{
  res.sendFile(__dirname +'/public/faq.html');
 
});
//Route to Contact page
router.get('/contact', (req,res)=>{
  res.sendFile(__dirname +'/public/contact.html');
});
//Route to Login page
router.get('/login', (req,res)=>{
  res.sendFile(__dirname +'/public/login.html');
});
//Route to Register page
router.get('/register', (req,res)=>{
  res.sendFile(__dirname +'/public/register.html');
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