//Importing  express module
//////////**********************Importing Libraries***************///////////////////
const express=require("express");
const urlencodedParser = express.urlencoded({ extended: true });
const pug =require("pug")
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const port=process.env.PORT || 5000;
const bcrypt=require("bcrypt");
//ExpressJS application
const app=express();
/////////////********************Routes******************/////////////
//Routes for home page
app.get('/', (req,res)=>{
  res.sendFile(__dirname +'/public/index.html');
 
});
//Route to Contact page
app.get('/contact', (req,res)=>{
  res.sendFile(__dirname +'/public/contact.html');
});
//Route to Login page
app.get('/login', (req,res)=>{
  res.sendFile(__dirname +'/public/login.html');
});
//Route to Register page
app.get('/register', (req,res)=>{
  res.sendFile(__dirname +'/public/register.html');
});
//Route to About page
app.get('/about', (req,res)=>{
  res.sendFile(__dirname +'/public/about.html');
});
//Route to Menu page
app.get('/menu', (req,res)=>{
  res.sendFile(__dirname +'/public/menu.html');
});
//Route to faq page
app.get('/faq', (req,res)=>{
  res.sendFile(__dirname +'/public/faq.html');
 
});
//Route for product page
app.get('/products', (req,res)=>{
  res.sendFile(__dirname +'/public/products.html');
 
});
//////////***********************Template Engine*************8888888888888888//////////////////
app.set('view engine', 'pug')
//Route to Home page
//app.get('/views/welcome', (req,res)=>{
 // res.send('welcome')
//})

//////////////*******************Middleware******************///////////////
app.use(express.static("public"))
app.use(express.json())
app.use(urlencodedParser)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

///////////////**********GET method for views*****************////////////////
app.get('/welcome', (req,res)=>{
  res.render('welcome')
})

////////////////*******************Request Handler for for Register(POST requests)**********************////////////////
app.post ('/register', urlencodedParser,  (req, res)=>{
  //console.log(req.body);
  
  try{
    /*let salt1=await bcrypt.genSalt()
    let hashedRegPassword=await bcrypt.hash(req.body.password, salt1)
    let hashedConfirmPassword=await bcrypt.hash(req.body.confirmPassword, salt1)
    console.log(salt1)
    console.log(hashedRegPassword)
    console.log(hashedConfirmPassword)*/
  let emailAddress=req.body.emailaddress;
  let firstName=req.body.firstName;
  let lastName=req.body.lastName;
  let password=req.body.password;
  let confirmPassword=req.body.confirmPassword;
  let mobile=req.body.mobile
   
 if(emailAddress && firstName && lastName && password && confirmPassword && mobile)
  { //res.status(200).send({status:'ok'})
    //console.log(req.body)
    
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=> {
      const db=client.db("register")
      const collection =db.collection("users")
      const doc={email:emailAddress , firstName:firstName, lastName:lastName , password:password, confirmPassword:confirmPassword , mobile:mobile };
      /*collection.findOne({email:emailAddress}, (err,result)=>{
        if(error){
         console.log("User exists")

        }else{
          collection.insertOne(doc)

        }
      })
    */
      /*db.collection.find({ "email": "email" })
      if the result length == 0 // Insert a new doc
      db.collection.insertOne(doc)
      else {
      res.send('email already exists').status(400)
      }*/
  
      collection.insertOne(doc, (error, result) =>{
        if(!error){
          client.close();
            console.log(result.ops)
            res.send (doc)
          

        }else{
          client.close();
          res.send("is an error")
        }
      
      });
    
    });
    
    
   }else{
    return res.status(400).send("bad request");

  }
  }catch(ex){
    return res.status(500).send("error");
  }
});


///////////////////**********POST for Login**************//////////////////
app.post ('/login', urlencodedParser, async (req, res)=>{
  
  try{
    let salt=await bcrypt.genSalt()
    let hashedPassword=await bcrypt.hash(req.body.password, salt)
   // console.log(salt)
    //console.log(hashedPassword)
   // let compare=await bcrypt.compare(req.body.password, user.password)
    //console.log(compare)
    
    let username=req.body.name;
    
    if(username && hashedPassword){
             
      MongoClient.connect(url, { useUnifiedTopology: true },  (err, client)=> {
        const db=client.db("login")
        const collection =db.collection("loginusers")
        const doc={username:username , password:hashedPassword };
        collection.insertOne(doc, (error,result) =>{
          if(!error){
            client.close();
            console.log(result.ops)
            res.send (doc)
            
  
          }else{
            client.close();
            res.send("is an error")
          }
          
        });
      });

    }else{
      return res.status(400).send("bad request");

    }
  }catch(ex){
    return res.status(500).send("error");
  }
});
///////////////////**********POST for Contact**************//////////////////
app.post ('/contact', urlencodedParser, (req, res)=>{
  
  try{
    //console.log(req.body);
    let name=req.body.yourName;
    let email=req.body.yourEmail;
    let phone=req.body.phoneNumber;
    let message=req.body.message
    if(name && email && phone && message){
     
      MongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=> {
        const db=client.db("contact")
        const collection =db.collection("contactusers")
        const doc={yourname:name , yourEmail:email, mobile:phone, message:message };
        collection.insertOne(doc, (error,result) =>{
          if(!error){
            client.close();
            console.log(result.ops)
            res.send (doc)
  
          }else{
            client.close();
            res.send("is an error")
          }
          
        });
      });

    }else{
      return res.status(400).send("bad request");

    }
  }catch(ex){
    return res.status(500).send("error");
  }
});



////////////////////////***************Port listening*******************///////////////
app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
});
