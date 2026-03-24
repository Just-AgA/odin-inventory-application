const db = require('../db');

exports.getByCategory = (categoryId) =>
  db.query('SELECT * FROM items WHERE category_id = $1', [categoryId]);
