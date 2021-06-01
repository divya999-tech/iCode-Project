//Importing  express module
const express=require("express");
const bodyParser = require('body-parser')
const urlencodedParser = express.urlencoded({ extended: false });

const port=5000;
//ExpressJS application
const app=express();


app.set('view engine', 'pug')
//Route to Home page


app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/welcome', (req,res)=>{
  res.render(__dirname +'/views/welcome.pug');
})

app.post("/login", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  

  res.send(
    `We got the following values from the query string: ${username}, and ${password}`
  );
});

app.post('/register',  (req,res)=>{
 console.log(req.body);
res.json({
  email:req.body,
   firstName:req.body,
   lastName:req.body,
   password:req.body,
   confirmPassword:req.body,
   mobileNumber:req.body
});
   
});


/*app.post('/login', (req,res)=>{
  console.log(req.body);
 res.json({
   username:req.body,
   password:req.body,
    
 });
    
 });*/

 app.post('/contact', (req,res)=>{
  console.log(req.body);
 res.json({
   yourName:req.body,
   yourEmail:req.body,
   phoneNumber:req.body,
   message:req.body
    
 });
    
 });

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
});






  
  
  
//${email} ${firstName}  ${lastName}  ${password}  ${confirmPassword}  ${mobileNumber}`







/*app.post('/public/register',  (req,res)=>{
    console.log("I got a request")
    console.log(req.body)
    const data=req.body
    
    
 res.json({
    email:`${data.emailaddress}`,
    firstname:`${data.firstName}`,
    lastname:`${data.lastName}`,
    password:`${data.password}`,
    confirmpassword:`${data.confirmPassword}`,
    mobilenumber:`${data.mobile}`
    
    });
 
});

app.post('public/login', (req,res)=>{
    console.log(req.body)
    const data=req.body;
    res.json({
        name:`${data.name}`,
        password:`${data.password}`
    });
});*/




//app.use('/', router);
//const path = require("path");
//const router = express.Router();

//const { response } = require("express");
//const http=require("http")


//const bodyParser = require('body-parser')
//const multer = require('multer'); // v1.0.5

//const upload = multer()
//const login=require("./routes/login")
//const register=require("./routes/register")
//const contact=require("./routes/contact")

//app.use(express.urlencoded({ extended: true }))

/*app.get('/public/register', (req, res)=>{
    const data={
email:req.body.emailadress,
/*firstname:`${data.firstName}`,
lastname:`${data.lastName}`,
password:`${data.password}`,
confirmpassword:`${data.confirmPassword}`,
mobilenumber:`${data.mobile}`*/

//}
   
    //res.send(req.body);
//});



//res.send(req.body.mail)

 //response.status(200).send(request.body)


//app.get('/public/register/:email/:firstname', (req, res)=>{
   //res.send(req.params)
//});
 


/*{
    email:`${data.emailaddress}`,
    firstname:`${data.firstName}`,
    lastname:`${data.lastName}`,
    password:`${data.password}`,
    confirmpassword:`${data.confirmPassword}`,
    mobilenumber:`${data.mobile}`

    
}*/

/*const values={
    email:`${data.emailaddress}`,
    firstname:`${data.firstName}`,
    lastname:`${data.lastName}`,
    password:`${data.password}`,
    confirmpassword:`${data.confirmPassword}`,
    mobilenumber:`${data.mobile}`

    
}*/
/*app.get("/", (req, res)=>{
    res.sendFile(path.join(_dirname + '/login.html'))
});
app.get("/", (req, res)=>{
        res.sendFile(path.join(_dirname + '/register.html'))
});
app.get("/", (req, res)=>{
    res.sendFile(path.join(_dirname + '/contact.html'))
});*/
