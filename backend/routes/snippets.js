const express = require('express')
const {create, getAllSnippets} = require('../controllers/snippets')
const {requireSignin} = require('../controllers/auth')
const router = express.Router()



//Handle incoming routes
router.post('/snippet', requireSignin, create)
router.get('/snippet', getAllSnippets)

module.exports = router