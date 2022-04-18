const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");

const writeMessages = (req, res) => {
  res.json({ message: "Write message" });
};

const showMessage = (req, res) => {
  res.json({ message: "Show all messages" });
};

module.exports = {
  writeMessages,
  showMessage,
};
