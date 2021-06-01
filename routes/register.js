const express=require("express");
const router=express.Router();
//Route to Register page
router.get('/register', (req,res)=>{
    res.sendFile(__dirname +'/public/register.html');
  });
  module.exports = router;