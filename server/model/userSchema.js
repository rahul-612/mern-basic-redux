const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    
})


//middleware for hashing the password
userSchema.pre("save",async function(next){
    //save mtlb ki save(jo auth me data save ho rha h usse phle) se phle isko chlana h
    if(this.isModified('password')){
        //yani agr user ne password agr change kre ya phli br likha tbhi ye chle

        this.password=await bcrypt.hash(this.password,12);    //yani jo bhi user ka password tha usko hash kr diya aur usi m store kr diya
        this.cpassword=await bcrypt.hash(this.cpassword,12); 

        next(); //yani ab jha ye call hua uske next instructions execute ho jaye i.e user.save()
    }
})


userSchema.methods.generateToken = function () {
      
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);

  };

  userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };



const User=mongoose.model("user",userSchema);

module.exports=User;