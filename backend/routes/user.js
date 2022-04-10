const express = require('express')
const {authMiddlerware, requireSignin} = require('../controllers/auth')
const {read} = require('../controllers/user')
const router = express.Router()

//Validators for the auth routes



//Handle incoming routes
router.get('/profile', requireSignin, authMiddlerware, read)



module.exports = router