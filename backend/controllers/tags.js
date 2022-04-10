const TagsModel = require("../models/TagsModel");
const slugify = require('slugify');
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const { name} = req.body;

    let slug = slugify(name).toLowerCase();

    let tag = new TagsModel({name , slug});

    tag.save((err, data) => {
        if(err) {
            res.status(400).json({errormessage: errorHandler(err)});
        } else {
            res.json(data);
        }
    })
}

exports.getTag = (req, res) => {
    //Get a single tag based on slug
    const slug = req.params.slug.toLowerCase();

    TagsModel.findOne({slug}).exec((err, data) => {
        if(err) {
            res.status(400).json({errormessage: errorHandler(err)});
        } else {
            res.json(data);
        }
    })
}

exports.getAllTags = (req, res) => {
    //Get all tags
    TagsModel.find({}).exec((err, data) => {
        if(err) {
            res.status(400).json({errormessage: errorHandler(err)});
        } else {
            res.json(data);
        }
    })
}

exports.deleteTag = (req, res) => {
    //Delete a tag
    const slug = req.params.slug.toLowerCase();

    TagsModel.findOneAndRemove({slug}).exec((err, data) => {
        if(err) {
            res.status(400).json({errormessage: errorHandler(err)});
        } else {
            res.json({message: "Tag deleted successfully"});
        }
    })
}