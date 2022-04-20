
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
        const { title, body, tags } = fields;
        
        console.log(title, body);

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
