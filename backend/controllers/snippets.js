
const TagsModel = require('../models/TagsModel');
const formidable = require('formidable');
const slugify = require('slugify');
const _ = require('lodash');
const striptags = require('striptags');
const { errorHandler } = require('../helpers/dbErrorHandler');
const Snippet = require('../models/SnippetModel');
const fs = require('fs');



exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        let snippet = new Snippet(fields);
        // snippet.slug = slugify(fields.title, { lower: true });

        if(!snippet.title || !snippet.body) {
            return res.status(400).json({
                error: 'All fields are requireds!'
            });
        }

        if(snippet.body.length < 200) {
            return res.status(400).json({
                error: 'Code must be over than 200 characters'
            });
        }


        //validate tags
        if(!fields.tags || fields.tags.length === 0) {
            return res.status(400).json({
                error: 'Tags must be selected'
            });
        }


        snippet.tags = snippet.tags;
        snippet.slug = slugify(fields.title, { lower: true });
        //Snippet meta_title and meta_desc
        snippet.meta_title = `${fields.title} | ${'SnippetMaster'}`;
        snippet.meta_desc = striptags(fields.body.substring(0, 160));
        //posted by
        
        //tags array
        let arrayOfTags = fields.tags.split(',')


        if (files.photo) {
            //file are not allowed to be uploaded
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Images should be less than 1mb in size'
                });
            }
            snippet.photo.data = fs.readFileSync(files.photo.path, 'base64');
            snippet.photo.contentType = files.photo.type;
        }
        snippet.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            //res.json(result);
            //find snippet based on id

            Snippet.findByIdAndUpdate(result._id, {$push: {tags:arrayOfTags}}, {new: true}).exec((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                else{
                    res.json(result);
                }
            })
        });

        console.log(arrayOfTags);
    });
}

exports.getAllSnippets = (req, res) => {
    Snippet.find().exec((err, snippets) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(snippets);
    });
}
