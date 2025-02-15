const Admin = require('../Model/Admin');
const Categories = require('../Model/Categories');
const Blogs = require('../Model/Blogs');

const getAdminLogin = (req, res) => {
  res.render('admin-login');
}

const getAddNewCategory = (req, res) => {
  res.render('admin-dashboard', { isAddCategory: true, showBlogs: false, showCategories: false, writeBlogPost: false });
}

const postAddNewCategory = async (req, res) => {
  try {

    const newCategory = new Categories(req.body);
    const category = await Categories.find({ category: req.body.category, showCategories: false, writeBlogPost: false });
    console.log(req.body.category);

    if (category.category != req.body.category) {
      const savedCategory = await newCategory.save();
    }

    res.render('admin-dashboard', { isAddCategory: false, showBlogs: false, showCategories: false, writeBlogPost: false });

  } catch (err) {
    console.log(err);
  }
}

const postAdminLogin = async (req, res) => {
  try {
    // const Admins = await Admin.find({});
    // console.log(Admins);

    // const { email, password } = await req.body;
    // console.log(email, password);

    // const admin = Admin.findOne({ email: req.body.email });
    // const match = await bcrypt.compare(admin.pswd, password);

    // // const accessToken = jwt.sign(admin, process.env.TOKEN_SECRET);

    // if (match) {
    //   res.render('admin');
    //   res.json({ accessToken: accessToken });
    // } else {
    //   res.json({ message: "Invalid Credentials" });
    // }
    res.render('admin-dashboard');

  } catch (e) {
    console.log(e);
  }
}

const getAdminDashboard = (req, res) => {
  res.render('admin-dashboard', { isAddCategory: false, showBlogs: false, showCategories: false, writeBlogPost: false });
}

const getAdminBlogs = async (req, res) => {
  try {
    const blogID = req.params.blog_id;
    if (blogID) {
      const blog = await Blogs.find({ _id: blogID });

      console.log(blog[0]);
      res.render('blog-post', { blog: blog[0] });
    }
    else {
      const blogs = await Blogs.find({});
      res.render('admin-dashboard', { isAddCategory: false, showBlogs: true, blogs: blogs, showCategories: false, writeBlogPost: false })
    }
  } catch (err) {
    console.log(err);
  }
}

const getShowAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.render('admin-dashboard', { isAddCategory: false, showBlogs: false, showCategories: true, writeBlogPost: false, categories: categories })
  } catch (err) {
    console.log(err);
  }
}

const getWriteBlogPost = (req, res) => {
  res.render('admin-dashboard', { isAddCategory: false, showBlogs: false, showCategories: false, writeBlogPost: true })
}

const postBlogPost = async (req, res) => {
  try {
    const newPost = new Blogs(req.body);
    const savedPost = newPost.save();
    res.render('admin-dashboard', { isAddCategory: false, showBlogs: false, showCategories: false, writeBlogPost: true })

  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAdminLogin,
  postAdminLogin,
  getAdminDashboard,
  getAddNewCategory,
  postAddNewCategory,
  getAdminBlogs,
  getShowAllCategories,
  getWriteBlogPost,
  postBlogPost
}