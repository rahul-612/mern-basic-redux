const express=require("express");
const {register,login,loadUser,logout}=require("../controllers/user")
const router=express.Router();
const { isAuthenticated } = require("../middlewares/auth");

router.route("/create").post(register);
router.route("/login").post(login);
router.route("/me").get(isAuthenticated,loadUser);
router.route("/logout").get(logout);

module.exports=router;