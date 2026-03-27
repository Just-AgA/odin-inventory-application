const Category = require('../models/categoryModel');
const Item = require('../models/itemModel');

exports.checkAdmin = (req, res, next) => {
  if (req.body.admin_password !== process.env.ADMIN_PASSWORD) {
    return res.send('Wrong admin password');
  }
  next();
};

exports.list = async (req, res) => {
  const categories = await Category.getAll();
  res.render('index', { categories: categories.rows });
};
