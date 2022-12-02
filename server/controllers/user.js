const userSchema = require("../model/userSchema");

exports.register = async (req, res) => {
  try {
    const { name, email, phone, profile, password, cpassword } = req.body;

    let user = await userSchema.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    user = await userSchema.create({
        name, email, phone, profile, password, cpassword
    });

    const token = await user.generateToken();

// after register, redirect to home page ie we dont need to login
        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        return res.status(201).cookie("token", token, options).json({
            success: true,
            user,
            token,
            message:"User Created Successfully"
        });
   
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
    
  }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
  
        const user = await userSchema.findOne({ email })
            .select("+password")


        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist",
            });
        }
        
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        const token = await user.generateToken();

        // expires: 90days
        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(200).cookie("token", token, options).json({
            success: true,
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.loadUser = async (req, res) => {
    try {
      const user = await userSchema.findById(req.user._id)
  
      res.status(200).json({
        success: true,
        user,
      });
      
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  
exports.logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({
        success: true,
        message: "Logged out",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
