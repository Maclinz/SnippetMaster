const express = require('express')
const {time} = require('../controllers/snippets')
const router = express.Router()


//Handle incoming routes
router.get('/', time)

module.exports = router