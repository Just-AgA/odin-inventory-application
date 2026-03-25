const db = require('../db');

exports.getByCategory = (categoryId) =>
  db.query('SELECT * FROM items WHERE category_id = $1', [categoryId]);

exports.getById = (id) => db.query('SELECT * FROM items WHERE id = $1', [id]);
