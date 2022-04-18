const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require("../controllers/userController");

router.post('/logged', loginUser)
router.get('/me', getMe)



module.exports = router