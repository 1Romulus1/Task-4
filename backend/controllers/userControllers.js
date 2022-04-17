const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get user" });
})

const setUsers = asyncHandler(async (req, res) => {
   if(!req.body.text) {
      res.status(400)
      throw new Error("Please add Your name");
   }

  res.status(200).json({ message: "Set user" });
})

const putUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
})

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
})

module.exports = {
  getUsers,
  setUsers,
  putUser,
  deleteUser,
};