const Item = require('../models/itemModel');

exports.detail = async (req, res) => {
  const item = await Item.getById(req.params.id);
  res.render('item_detail', { item: item.rows[0] });
};

exports.create = async (req, res) => {
  await Item.create(req.body);
  res.redirect(`/categories/${req.body.category_id}`);
};
