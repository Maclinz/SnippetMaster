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
        //destructuring
        const { title, code, tags } = fields;
        
        //check for errors
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }

        //create snippet object
        let snippetItem = new Snippet();

        snippetItem.title = title;
        snippetItem.slug = slugify(title).toLowerCase();
        snippetItem.code = code;
        snippetItem.meta_title = `${title} - Snippet Master`;
        snippetItem.meta_description = striptags(code);

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
            res.json(result);
        })

        //sync tags with snippet
        
    })
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
