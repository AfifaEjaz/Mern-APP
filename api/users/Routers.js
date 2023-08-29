const express = require('express')
const router = express.Router()

const { signup, login, getAllUsers, getUserByEmail, getUserByID, deleteUser, updateUser } = require('./Controller')

router.post('/signup', signup)
router.post('/login', login)
router.get('/getallusers', getAllUsers);
router.get('/getuserbyemail', getUserByEmail);
router.get('/getuserbyid', getUserByID);
router.delete('/deleteuser', deleteUser);
router.put('/updateuser', updateUser);

module.exports = router