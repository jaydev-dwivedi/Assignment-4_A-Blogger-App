const express = require('express');
const router = express.Router();

const { getBlogs, getBlogByTitle, postSearchTitle } = require('../controllers/userControllers')
const { getAdminLogin, postAdminLogin, getTheBlog } = require('../controllers/adminControllers');

router.route('/')
  .get(getBlogs);

router.route('/:page/:title?')
  .get(getBlogs);

router.route('/admin')
  .get(getAdminLogin)
  .post(postAdminLogin);

module.exports = router;