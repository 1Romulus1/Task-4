const express = require('express')
const router = express.Router()
const { writeMessages, showMessage,} = require("../controllers/messageController");

router.route('/').get(showMessage).post(writeMessages)

module.exports = router