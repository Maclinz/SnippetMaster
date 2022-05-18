const express = require('express')
const { signup, signin, signout, requireSignin } = require('../controllers/auth')
const { runValidation } = require('../validators')
const { userSignUpValidator } = require('../validators/auth')
const { userSignInValidator } = require('../validators/auth')
const router = express.Router()

//Validators for the auth routes



//Handle incoming routes
router.post('/signup', userSignUpValidator, runValidation, signup)
router.post('/signin', userSignInValidator, runValidation, signin)
router.get('/signout', requireSignin, userSignInValidator, runValidation, signout)


module.exports = router