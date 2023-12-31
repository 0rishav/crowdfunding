const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
   },
   phone:{
    type:Number,
    required:true,
    unique:true,
   },

   question:{
    type:String,
    required:true
   },

   password:{
        type:String,
        required:true,
        unique:true,
   },
   role:{
    type:String,
    default:"user",
   }

},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return bcrypt.compare(enteredPassword,this.password);
}

module.exports = mongoose.model("User",userSchema)