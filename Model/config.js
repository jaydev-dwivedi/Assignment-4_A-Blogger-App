const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/Blogs')
  .then(() => console.log('Database connected'))
  .catch(err => console.log("Error Connecting to the Database.", err));