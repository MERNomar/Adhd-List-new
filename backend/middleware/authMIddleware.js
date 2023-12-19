// import jwt
const jwt = require("jsonwebtoken");
// import user model
const { User } = require("../models/userModel");

// middleware function with request , response , next arguments so it can go next
const authMiddleware = async (req, res, next) => {
  // taking authorization from the headers
  const { authorization } = await req.headers;
  // check if there is an authorization in the header
  if (!authorization) {
    return res
      .status(401)
      .json({ error: "You need to be authorized to access" });
  }
  try {
    // this will spilt auth variable to two parts
    const token = authorization.split(" ")[1];
    // this will take jwt to verify the token with the secret word
    const { id } = jwt.verify(token, process.env.SECRET);
    // ! Always use find one since it faster than find by id
    const getId = await User.findOne(id).select("_id");
    req.user = getId._id;
    // go next
    next();
  } catch (error) {
    // catch error if it exist
    console.log(error);
    return res.status(400).json({ error: "Request is not authorized" });
  }
};
// export
module.exports = authMiddleware;
