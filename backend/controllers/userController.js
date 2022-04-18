const asyncHandler = require('express-async-handler')
const User = require('../models/userModel') 


//POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { name } = req.body; // req.body.name

  if (!name) {
    res.status(400);
    throw new Error("Please add your name");
  }
  // Chexk if user exist
  const userExist = await User.findOne({name})
  if(userExist) {
    res.status(201).json({Logged: userExist.name})
  }
  const createUser = await User.create({name})
  if(createUser) {
    res.status(201).json({Logged:createUser.name})
  }
});


//GET /api/users/me
const getMe = async (req, res) => {
  res.json({ message: "User data display" });
};


module.exports = {
  loginUser,
  getMe,
};