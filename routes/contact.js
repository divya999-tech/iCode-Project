const express=require("express");
const router=express.Router();
//Route to Contact page
router.get('/contact', (req,res)=>{
    res.sendFile(__dirname +'/public/contact.html');
  });
  module.exports = router;