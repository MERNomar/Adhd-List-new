const {User} = require('../models/userModel');


const userLogin = (req , res) => {
    res.send("login")
}

const userSignup = (req , res) =>  {
    const {username , password , email} = req.body

    User.signup( email , password , username )
    .then(response => res.status(200).json(response))
    .catch(error =>res.status(400).json(error.message))
} 

module.exports = {userLogin , userSignup}