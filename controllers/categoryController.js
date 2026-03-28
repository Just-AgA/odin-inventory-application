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

exports.detail = async (req, res) => {
  const category = await Category.getById(req.params.id);
  const items = await Item.getByCategory(req.params.id);

  res.render('category_detail', {
    category: category.rows[0],
    items: items.rows,
  });
};
