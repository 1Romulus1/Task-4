const express = require('express')
const router = express.Router()
const { getUsers, setUsers, putUser, deleteUser } = require("../controllers/userControllers");

router.route('/').get(getUsers).post(setUsers)
router.route('/:id').put(putUser).delete(deleteUser)


module.exports = router