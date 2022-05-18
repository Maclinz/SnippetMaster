const express = require('express')
const { create, getAllSnippets, getAllSnippetsTags, getSingleSnippet, deleteSnippet, updateSnippet, listSearch, listByUser } = require('../controllers/snippets')
const { requireSignin, adminMiddlerware, canUpdateAndDelete } = require('../controllers/auth')
const router = express.Router()



//Handle incoming routes
router.post('/snippet', requireSignin, create)
router.get('/snippet', getAllSnippets)
router.post('/snippet-tags', getAllSnippetsTags)
router.get('/snippet/:slug', getSingleSnippet)
router.delete('/snippet/:slug', adminMiddlerware, canUpdateAndDelete, deleteSnippet)
router.put('/snippet/:slug', adminMiddlerware, canUpdateAndDelete, updateSnippet)
router.get('/snippet/search', listSearch)

//get user snippets
router.post('/user/snippet', requireSignin, create)
router.get('/:username/snippets', listByUser)
router.delete('/user/snippet/:slug', canUpdateAndDelete, deleteSnippet)
router.put('/snippet/:slug', canUpdateAndDelete, updateSnippet)

module.exports = router