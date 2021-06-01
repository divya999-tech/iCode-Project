const express=require("express");
const router=express.Router();

//Route to About page
router.get('/about', (req,res)=>{
    res.sendFile(__dirname +'/public/about.html');
  });
  module.exports = router;