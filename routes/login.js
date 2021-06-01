const express=require("express");
const router=express.Router();

//Route to Login page
router.get('/login', (req,res)=>{
    res.sendFile(__dirname +'/public/login.html');
  });
  module.exports = router;