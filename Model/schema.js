const mongoose = require('mongoose');
require('./../Model/config');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String
  },
  description: {
    type: Object,
    required: true
  },
  timeStamp: {
    type: Date
  }
});

const Blog = mongoose.model('blogposts', blogSchema);
module.exports = Blog;