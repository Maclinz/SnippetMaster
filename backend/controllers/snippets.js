const TagsModel = require('../models/TagsModel');
const formidable = require('formidable');
const slugify = require('slugify');
const _ = require('lodash');
const striptags = require('striptags');
const { errorHandler } = require('../helpers/dbErrorHandler');
const Snippet = require('../models/SnippetModel');
const fs = require('fs');


const {signin} = require('../controllers/auth');

exports.create = (req, res) => {
    console.log('I am a user',req.user);

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        //destructuring
        
        //check for errors
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        
        const { title, code, tags } = fields;
        
        //validate title and code
        if(!title || !code) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        //validate code length
        if(!code || code.length < 100) {
            return res.status(400).json({
                error: 'Code must be greater than 100 characters!'
            });
        }

        //validate title length
        if(!title || title.length < 10) {
            return res.status(400).json({
                error: 'Title must be greater than 10 characters!'
            });
        }

        /* Uncomment later
        //check for tags
        if(!tags || tags.length === 0) {
            return res.status(400).json({
                error: 'At least one tag is required!'
            });
        }*/


        //create snippet object
        let snippetItem = new Snippet();

        snippetItem.title = title;
        snippetItem.slug = slugify(title).toLowerCase();
        snippetItem.code = code;
        snippetItem.meta_title = `${title} - Snippet Master`;
        snippetItem.meta_description = striptags(code.substring(0, 160));
        snippetItem.postedBy = req.auth._id;

        //tags array
        let tagsArray = tags && tags.split(',');

        //check for image
        if(files.photo) {
            if(files.photo.size > 10) {
                return res.status(400).json({
                    error: 'Images are not allowed to be uploaded!'
                });
            }
            snippetItem.photo.data = fs.readFileSync(files.photo.path);
            snippetItem.photo.contentType = files.photo.type;
        }

        //save snippet
        snippetItem.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            //res.json(result);
            //find snippet by id
            Snippet.findByIdAndUpdate(result._id, {$push: {tags: tagsArray}}, {new: true}).exec((err, snippet) => {
                if(err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }else{
                    res.json(snippet);
                }
                
            })
        })

        //sync tags with snippet
        
    })
}

exports.getAllSnippets = (req, res) => {
    Snippet.find({}).populate('tags', '_id name slug')
                    .populate('postedBy', '_id name username')
                    .select('_id title slug code tags postedBy createdAt updatedAt')
                    .sort({createdAt: -1})
                    .exec((err, snippets) => {
                        if(err) {
                            return res.status(400).json({
                                error: errorHandler(err)
                            });
                        }
                        res.json(snippets);
                    })
}

exports.getSingleSnippet = (req, res) => {

}

exports.deleteSnippet = (req, res) => {
    
}
exports.updateSnippet = (req, res) => {

}
exports.getAllSnippetsTags = (req, res) => {
    //limit blogs per request
    let limit = req.body.limit ? parseInt(req.body.limit) : 10;
    let skip =  req.body.skip ? parseInt(req.body.skip) : 0;

    let newSnippets;
    let tags;

    //find all snippets
    Snippet.find({}).populate('tags', '_id name slug')
                    .sort({createdAt: -1})
                    .skip(skip)
                    .limit(limit)
                    .select('_id title slug code tags createdAt updatedAt')
                    .exec((err, snippets) => {
                        if(err) {
                            return res.status(400).json({
                                error: errorHandler(err)
                            });
                        }
                        newSnippets = snippets;
                        //find all tags
                        TagsModel.find({}).select('_id name slug').exec((err, tag) => {
                            if(err) {
                                return res.status(400).json({
                                    error: errorHandler(err)
                                });
                            }
                            tags = tag;
                            res.json({
                                newSnippets, tags, size: snippets.length
                            });
                        })
                    })
                    
}


