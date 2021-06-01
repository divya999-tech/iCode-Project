const express=require("express");
const router=express.Router();
//Route to faq page
router.get('/faq', (req,res)=>{
    res.sendFile(__dirname +'/public/faq.html');
   
  });
  module.exports = router;