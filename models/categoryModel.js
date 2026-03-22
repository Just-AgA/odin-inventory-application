const db = require('../db');

exports.getAll = () => db.query('SELECT * FROM categories ORDER BY name');

exports.getById = (id) =>
  db.query('SELECT * FROM categories WHERE id = $1', [id]);
