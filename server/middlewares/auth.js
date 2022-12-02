const userSchema = require("../model/userSchema");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;  

    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    // verify the token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // finding the user
    req.user = await userSchema.findById(decoded._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
