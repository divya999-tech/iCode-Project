const express=require("express");
const router=express.Router();
//Route to Menu page
router.get('/menu', (req,res)=>{
    res.sendFile(__dirname +'/public/menu.html');
  });
  module.exports = router;