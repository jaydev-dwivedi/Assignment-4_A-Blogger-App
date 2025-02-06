const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Blog = require('./../Model/schema');
// const pswd = "123456789";
// bcrypt.hash(pswd, 10)
//   .then((hashedPswd) => console.log(hashedPswd))
//   .catch((err) => console.log(err))


router.use(bodyParser.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/blog', (req, res) => {
  res.render('blog');
});

router.get('/admin', (req, res) => {
  res.render('admin-login');
});

router.post('/admin', async (req, res) => {

  try {
    const Blogs = await Blog.find({});
    console.log(Blogs);

    const { email, password } = await req.body;
    console.log(email, password);

    const admin = Blog.findOne({ email: req.body.email });

    const match = await bcrypt.compare(admin.pswd, password);

    // const accessToken = jwt.sign(admin, process.env.TOKEN_SECRET);

    if (match) {
      res.render('admin');
      res.json({ accessToken: accessToken });
    } else {
      res.json({ message: "Invalid Credentials" });
    }

  } catch (e) {
    console.log(e);
  }
});

module.exports = router;