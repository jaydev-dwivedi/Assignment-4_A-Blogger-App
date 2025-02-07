const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: Object,
    required: true
  },
  author: {
    type: String
  },
  categories: {
    type: Array,
    required: true
  },
  timeStamp: {
    type: Date,
    required: true
  },
});

const Blog = mongoose.model('blogposts', blogSchema);
module.exports = Blog;