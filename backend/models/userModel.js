const mongoose = require('mongoose')
const {Schema} = mongoose
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
    username : {type : String , required : true},
    password : {type : String , required : true},
    email : {type : String , required : true , unique : true}
} , {timestamps : true})

// user schema method created
userSchema.statics.signup = async function( email , password , username) {

     //Add Check that both email and password exist 
     if (!email || !password){
        throw Error("Please fill all fields")
     }

    if(!validator.isEmail(email)) {
        throw Error("Please enter valid email")
    }

    if(!validator.isStrongPassword(password)) {
        throw Error("Please enter strong password")
    }
    
    
    // this will check if email already exists

     const exists = await this.findOne({email})
         // if the email exist this will throw an error
     if(exists) {
        throw Error( "Email is already used")
    }
    // salt basically make the hashing more safe 10 is the default
    const salt = await bcrypt.genSalt(10)
    // hash wil hash the password
    const hash = await bcrypt.hash(password , salt)
    /// this will create the user
    const user = await this.create({email , password : hash , username})

    return user
}

userSchema.statics.login = async function( email , password ) {

     if (!email || !password){
        throw Error("Please fill all fields")
     }
     const user = await this.findOne({email})
     if(!user) {
        throw Error("Invalid login credentials")
     }

    const match = await bcrypt.compare(password , user.password )
    
    if(!match){
        throw Error("Invalid login credentials")
    }
    
    return user
}
const User = mongoose.model("users" , userSchema)

module.exports = {User}

