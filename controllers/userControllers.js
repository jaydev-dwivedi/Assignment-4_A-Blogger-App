const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Blogs = require('../Model/Blogs');
const mongoose = require('mongoose');
const Blog = require('../Model/Blogs');

const getBlogs = async (req, res) => {
  try {

    let page = Number(req.params.page) || 1;
    console.log(page);

    let limit = 5;
    if (page != 1) limit = 6;

    let skip = (page - 1) * 5;

    let allBlogs = {};
    let len = 0;

    if (req.params.title != "") {
      let title = req.params.title;
      page = 1;
      skip = (page - 1) * 5;
      allBlogs = await Blogs.find({ title: title }).skip(skip).limit(limit);
      len = Math.ceil(Object.keys(allBlogs).length / limit);
    }
    else {
      allBlogs = await Blogs.find({}).skip(skip).limit(limit);
      len = Math.ceil(Number(await Blogs.countDocuments()) / limit);
    }

    res.render('index', { allBlogs: allBlogs, len: len, current_pg: page, index: 0 });
  }
  catch (err) {
    console.log(err);
  }
}

const getBlogByTitle = async (req, res) => {
  try {
    const title = req.params.title;
    const blog = await Blogs.findOne({ title: title });
    console.log("Found one document: ", blog.title);

    res.render('blog-post', { blog: blog });
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getBlogs,
  getBlogByTitle,
}