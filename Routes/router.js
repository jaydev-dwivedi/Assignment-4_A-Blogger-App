const express = require('express');
const router = express.Router();

const { getBlogs, getTheBlog, getBySearch } = require('../controllers/userControllers')
const {
  getAdminLogin,
  postAdminLogin,
  getAdminDashboard,
  getAddNewCategory,
  postAddNewCategory,
  getAdminBlogs,
  getShowAllCategories,
  getWriteBlogPost,
  postBlogPost
} = require('../controllers/adminControllers');

router.route('/')
  .get(getBlogs);

router.route('/post/:page/:index/:title')
  .get(getTheBlog);

router.route('/page/:page')
  .get(getBlogs);

router.route('/search')
  .get(getBySearch);

router.route('/category')
  .get(getBySearch);

router.route('/admin')
  .get(getAdminLogin)
  .post(postAdminLogin);

router.route('/admin/dashboard')
  .get(getAdminDashboard);

router.route('/admin/dashboard/add-category')
  .get(getAddNewCategory)
  .post(postAddNewCategory);

router.route('/admin/dashboard/blogs/:blog_id?')
  .get(getAdminBlogs);

router.route('/admin/dashboard/categories')
  .get(getShowAllCategories);

router.route('/admin/dashboard/write-blog')
  .get(getWriteBlogPost)
  .post(postBlogPost);

module.exports = router;