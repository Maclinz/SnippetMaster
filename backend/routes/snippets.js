const express = require('express')
const {create, getAllSnippets, getAllSnippetsTags,getSingleSnippet,deleteSnippet,updateSnippet} = require('../controllers/snippets')
const {requireSignin, adminMiddlerware} = require('../controllers/auth')
const router = express.Router()



//Handle incoming routes
router.post('/snippet', requireSignin, create)
router.get('/snippet', getAllSnippets)
router.post('/snippet-tags', getAllSnippetsTags)
router.get('/snippet/:slug', getSingleSnippet)
router.delete('/snippet/:slug',adminMiddlerware, deleteSnippet)
router.put('/snippet/:slug',adminMiddlerware, updateSnippet)

module.exports = router