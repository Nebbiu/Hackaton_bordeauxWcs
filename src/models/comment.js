'use strict'

//These are the models and schemas of mongoose which shall be served to
//Mongdb by express.

let mongoose = require('mongoose');

//creating the blogschema with mongoose's constructor class method.
let commentSchema = new mongoose.Schema({
    title: String,
    author: {
        type: String,
        default: 'Project made by :'
    },
    PublishedAt: {
        type: Date,
        default: Date.now
    },
    content: String
}, {
    timestamps: true
});

// creating and exporting model with the model method of mongoose.
module.exports = mongoose.model('Comment', commentSchema);
