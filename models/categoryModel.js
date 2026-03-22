const db = require('../db');

exports.getAll = () => db.query('SELECT * FROM categories ORDER BY name');

exports.getById = (id) =>
  db.query('SELECT * FROM categories WHERE id = $1', [id]);

exports.create = (name, description) =>
  db.query('INSERT INTO categories (name, description) VALUES ($1, $2)', [
    name,
    description,
  ]);
