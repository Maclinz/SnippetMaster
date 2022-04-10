const mongoose = require('mongoose')

const TagsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        max: 40,
    },
    slug: {
        type: String,
        unique: true,
        index: true
    },


}, {timestamps: true})


module.exports = mongoose.model('Tags', TagsSchema)

