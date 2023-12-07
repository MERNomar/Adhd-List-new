const mongoose = require('mongoose')
const {Schema} = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username : {type : String , required : true},
    password : {type : String , required : true},
    email : {type : String , required : true , unique : true}
} , {timestamps : true})

// user schema method created
userSchema.statics.signup = async function( email , password , username) {
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
const User = mongoose.model("users" , userSchema)

module.exports = {User}

