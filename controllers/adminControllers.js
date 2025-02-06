const Admin = require('../Model/Admin');

const getAdminLogin = (req, res) => {
  res.render('admin-login');
}

const postAdminLogin = async (req, res) => {
  try {
    const Admins = await Admin.find({});
    console.log(Admins);

    const { email, password } = await req.body;
    console.log(email, password);

    const admin = Admin.findOne({ email: req.body.email });
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
}

module.exports = {
  postAdminLogin,
  getAdminLogin,
}