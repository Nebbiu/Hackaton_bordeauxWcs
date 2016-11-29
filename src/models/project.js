'use strict'

//These are the models and schemas of mongoose which shall be served to
//Mongdb by express.

let mongoose = require('mongoose');

//creating the projectSchema with mongoose's constructor class method.
let projectSchema = new mongoose.Schema({
    img1: String,
    img2: String,
    title: String,
    author: { type:String, default: 'Project made by :'},
    PublishedAt: { type: Date, default: Date.now },
    content: String,
    website: String,
    votes: Number,
    techno: String,
    comments: []
  },{
  timestamps: true
});

// creating and exporting model with the model method of mongoose.
module.exports = mongoose.model('Project', projectSchema);
