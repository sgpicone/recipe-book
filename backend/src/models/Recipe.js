const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Recipe = new Schema({
    name: String,
    description: String,
    ingredients: [{
        name: String,
        qty: Number,
        unit: {
            name: String,
            metric: Boolean
        }
    }],
    method: [{
        section: Number,
        time: Number,
        steps: [{
            step: Number,
            description: String
        }]
    }],
    created: Date,
    lastModified: Date,
    src: String,
    tags: [String],
    links: [String]
});

module.exports = mongoose.model('Recipe', Recipe);