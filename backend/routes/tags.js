const express = require('express')
const { requireSignin, authMiddlerware } = require('../controllers/auth')
const {create, getTag, getAllTags, deleteTag} = require('../controllers/tags')
const router = express.Router();


//Validators for the auth routes
const {tagsCreatorValidator} = require('../validators/tags')


//Handle incoming routes
router.post('/tags', tagsCreatorValidator, requireSignin, authMiddlerware, create)
router.get('/tags', getAllTags)
router.get('/tags/:slug', getTag)
router.delete('/tags/:slug', tagsCreatorValidator, requireSignin, authMiddlerware, deleteTag)




module.exports = router