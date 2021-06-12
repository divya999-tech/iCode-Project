/*const express = require("express");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require ("./models/user");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect( "mongodb://localhost:27017/users");

const app = expresss();
app.set ("view engine", "pug");
app.use(express.urlencoded({extended:true}));

app.use (require("express-session")({
    secret: "She is intelligent",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());*/

//app.post('/register' , (req, res)=>{
/*if()

    let emailAddress=req.body.emailaddress;
  let firstName=req.body.firstName;
  let lastName=req.body.lastName;
  let password=req.body.password;
  let confirmPassword=req.body.confirmPassword;
  let mobile=req.body.mobile
})*/



/*app.listen(port, function () {
    console.log(`Server Has Started on ${port}`);
});*/