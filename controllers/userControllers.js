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

    const skip = (page - 1) * 5;

    const allBlogs = await Blogs.find({}).skip(skip).limit(limit);
    const len = Math.ceil(Number(await Blogs.countDocuments()) / limit);

    res.render('index', { allBlogs: allBlogs, len: len, current_pg: page, index: 0 });
  }
  catch (err) {
    console.log(err);
  }
}

const getTheBlog = async (req, res) => {
  try {
    const page = req.params.page;
    const index = req.params.index;

    let limit = 5;
    if (page != 1) limit = 6;

    const skip = (page - 1) * 5;

    const blogs = await Blogs.find({}).skip(skip).limit(limit);
    const blog = blogs[index];
    console.log(blog);

    res.render('blog-post', { blog: blog });
    // res.render('index', { allBlogs: blogs });
  }
  catch (err) {
    console.log(err);
  }
}

const getBySearch = async (req, res) => {
  try {
    let page = Number(req.params.page) || 1;
    console.log(page);

    let limit = 5;
    if (page != 1) limit = 6;

    const skip = (page - 1) * 5;

    const title = req.query.search_title;
    console.log(title);

    const allBlogs = await Blogs.find({ title: title }).skip(skip).limit(limit);
    console.log(page, allBlogs);

    const len = Math.ceil(allBlogs.length / limit);

    res.render('index', { allBlogs: allBlogs, len: len, current_pg: page, index: 0 });
  } catch (err) {
    console.log(err);
  }
}

const getByCategory = async (req, res) => {
  try {
    let page = Number(req.params.page) || 1;
    console.log(page);

    let limit = 5;
    if (page != 1) limit = 6;

    const skip = (page - 1) * 5;

    const category = req.query.category;
    console.log(category);

    const allBlogs = await Blogs.find({ categories: category }).skip(skip).limit(limit);
    console.log(page, allBlogs);

    const len = Math.ceil(allBlogs.length / limit);

    res.render('index', { allBlogs: allBlogs, len: len, current_pg: page, index: 0 });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getBlogs,
  getTheBlog,
  getBySearch,
  getByCategory,
}