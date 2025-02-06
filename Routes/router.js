const express = require('express');
const router = express.Router();

const { getAllBlogs, getBlogByTitle } = require('../controllers/userControllers')
const { getAdminLogin, postAdminLogin } = require('../controllers/adminControllers');

router.route('/')
  .get(getAllBlogs)
  .post(getBlogByTitle);

router.route('/admin')
  .get(getAdminLogin)
  .post(postAdminLogin);

module.exports = router;