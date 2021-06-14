//Importing  express module
//////////**********************Importing Libraries***************///////////////////
const express=require("express");
const port=process.env.PORT || 5000;
const urlencodedParser = express.urlencoded({ extended: true });
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const bcrypt=require("bcrypt");
/*const passport= require("passport")
const session = require("express-session");
const flash=require("connect-flash");*/
//ExpressJS application
const app=express();


//////////////*******************Middleware******************///////////////
app.use(express.static("public"))
app.use(express.json())
app.use(urlencodedParser)

//app.use(passport.session());

//app.use(flash());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/////////////********************Routes******************/////////////
//Routes for home page
app.get('/', (req,res)=>{
  res.sendFile(__dirname +'/public/index.html');//Route handler
 
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
 //res.send("You do not have access for this page")
});
//////////***********************Template Engine*****************//////////////////
app.set('view engine', 'pug')


///////////////**********Route for views*****************////////////////
app.get('/welcome', (req,res)=>{
  res.render('contactwelcome')
})

/*app.get('/products/logout', (req, res)=>{
  res.render('logout')
})*/

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
  let email=req.body.emailaddress;
  let firstName=req.body.firstName;
  let lastName=req.body.lastName;
  let password=req.body.password;
  let confirmPassword=req.body.confirmPassword;
  let mobile=req.body.mobile
   
 if(email && firstName && lastName && password && confirmPassword && mobile)
  { //res.status(200).send({status:'ok'})
    //console.log(req.body)
    
    MongoClient.connect(url, { useUnifiedTopology: true }, async (err, client)=> {
      const db=client.db("register")
      const collection =db.collection("users")
      const doc={email:email , firstName:firstName, lastName:lastName , password:password, confirmPassword:confirmPassword , mobile:mobile };
    const findUser= await collection.findOne({email:req.body.emailaddress})
   //console.log(findUser)
        if(findUser){
          console.log("User already exists")
          res.send({error:'User already exists'})


        }else{
          const newUser=await collection.insertOne(doc) 
              res.send (newUser)
              
              
          

        }
      // const find = await collection.findOne({email:emailAddress})
      // console.log(`Here are the ${find} values`)
       /*if(find==null){
        collection.insertOne(doc)
       }else{
        console.log("user already exit")
       }*/
        
       /* collection.insertOne(doc, (error, result) =>{
          if(!error){
            client.close();
              //console.log(result.ops)
              res.send (doc)
            
  
          }else{
            client.close();
            res.send("is an error")
          }*/
     })
    
   
   
      //});
    
   
  
  
 }else{
     res.status(400).send("bad request");

  }

 }catch(ex){
    return res.status(500).send("error");
  }
});


///////////////////**********POST for Login**************//////////////////
app.post ('/login', urlencodedParser, async (req, res)=>{
  
  try{
    //let salt=await bcrypt.genSalt()
    //let hashedPassword=await bcrypt.hash(req.body.password, 10)
   // console.log(salt)
    //console.log(hashedPassword)
   //let compare=await bcrypt.compare(req.body.password, hashedPassword)
   //console.log(compare)
    
    let email=req.body.email;
    let password=req.body.password;
    
    if(email && password){
             
      MongoClient.connect(url, { useUnifiedTopology: true },  async (err, client)=> {
        const db=client.db("register")
        const collection =db.collection("users")
        const doc={email:email , password:password };
        const loginFindUser=await collection.findOne(doc)
        console.log(loginFindUser)
        if(!loginFindUser){
          console.log("Invalid username/password")
         return res.status(400).send({message: "Invalid username/password"})
         

        }else {
          //const newLoginUser= await collection.insertOne(doc)
          //res.send(newLoginUser)
          return res.json({
          status:'ok'
          })
        }
        /*collection.insertOne(doc, (error,result) =>{
          if(!error){
            client.close();
            console.log(result.ops)
            res.send (doc)
            
  
          }else{
            client.close();
            res.send("is an error")
          }
          
        });*/
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

///////////////////**********POST for Logout**************//////////////////
app.post('/products', (req, res)=>{
  
   //res.send( 'You are logged out')
  res.redirect('/')
})


////////////////////////***************Port listening*******************///////////////
app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
});
