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
    error: req.query.error,
  });
};

exports.create = async (req, res) => {
  await Category.create(req.body.name, req.body.description);
  res.redirect('/');
};

exports.update = async (req, res) => {
  await Category.update(req.params.id, req.body.name, req.body.description);
  res.redirect('/');
};

exports.delete = async (req, res) => {
  const items = await Item.getByCategory(req.params.id);

  if (items.rows.length > 0) {
    return res.redirect(`/categories/${req.params.id}?error=hasItems`);
  }

  await Category.delete(req.params.id);
  res.redirect('/');
};
