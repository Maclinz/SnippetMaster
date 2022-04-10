const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const SnippetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 160,
        index: true,
    },
    slug: {
        type: String,
        unique: true,
        index: true,
    },
    code: {
        type: {},
        required: true,
        min: 3,
        max: 2000000,
        likes: Number
    },
    excerpt: {
        type: String,
        max: 1000
    },
    meta_title: {
        type: String,
    },
    meta_desc: {
        type: String,
    },

    photo: {
        data: Buffer,
        contentType: String
    },
    tags: [
        {
            type: ObjectId,
            ref: 'Tags',
            required: true
        }
    ],
    postedBy: {
        type: ObjectId,
        ref: 'Users',
    }

}, {timestamps: true})


module.exports = mongoose.model('Snippets', SnippetSchema);

