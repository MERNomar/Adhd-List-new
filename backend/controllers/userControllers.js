const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");

//* here a jwt.sign  with three arguments id , secret , expiresIn
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "60d" });
};

const userLogin = (req, res) => {
  const { password, email } = req.body;
  console.log(req.body);
  User.login(email, password)
    .then((response) => {
      const token = createToken(response._id);
      return { token, email: response.email, username: response.username };
    })
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(409).json(error.message));
};

const userSignup = (req, res) => {
  const { username, password, email } = req.body;

  User.signup(email, password, username)
    .then((response) => {
      const token = createToken(response._id);
      return { token, email: response.email, username };
    })
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(409).json(error.message));
};

module.exports = { userLogin, userSignup };
