const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: String
})

const Categories = mongoose.model('category', categorySchema);
module.exports = Categories;