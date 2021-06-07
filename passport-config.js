const localStrategy= require("passport-local").Strategy;
const bcrypt = require('bcrypt')

function initialize(passport, getUserByName, getUserById){
    const authenticateUser=async (username,secret ,done)=>{
        const user=getUserByName(username)
        if(user==null){
            return done(null, false, {message:'No user with that email'})
        }
        try{
            if (await bcrypt.compare(secret, user.secret)){
                return  done(null, user)


            }else{
                return done(null, false, {message:'password incorrect'})
            }

        }catch(e){
            return done(e)

        }

    }
passport.use(new localStrategy({usernameField:'email'}, authenticateUser))
passport.serializeUser((user, done)=>done(null,user.id))
passport.deserializeUser((id, done)=>{
return done(null, getUserById(id))
})
}

module.exports=initialize