const mongoose =require("mongoose")
const UserSchema=new mongoose.Schema(
    {
    emailAddress:{type:String, required:true, unique:true },
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    password:{type:String, required:true},
    confirmPassword:{type:String, required:true},
    mobileNumber:{type:Number, required:true},
},
{collection:'users'}
)

const User=mongoose.model('UserSchema', UserSchema)


model.exports= User;
