const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Blogs = require('../Model/Blogs');

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find({});
    console.log(allBlogs);

    res.render('index', { allBlogs: allBlogs });
  }
  catch (err) {
    console.log(err);
  }
}

const getBlogByTitle = async (req, res) => {
  try {
    const Blog = await Blog.find({ title: title });
  }
  catch (err) {
    console.log(err);

  }
}

module.exports = {
  getAllBlogs,
  getBlogByTitle,
}