const db = require('../db');

exports.getByCategory = (categoryId) =>
  db.query('SELECT * FROM items WHERE category_id = $1', [categoryId]);

exports.getById = (id) => db.query('SELECT * FROM items WHERE id = $1', [id]);

exports.create = (data) =>
  db.query(
    `INSERT INTO items (name, description, price, quantity, category_id)
     VALUES ($1,$2,$3,$4,$5)`,
    [data.name, data.description, data.price, data.quantity, data.category_id],
  );

exports.update = (id, data) =>
  db.query(
    `UPDATE items
     SET name=$1, description=$2, price=$3, quantity=$4, category_id=$5
     WHERE id=$6`,
    [
      data.name,
      data.description,
      data.price,
      data.quantity,
      data.category_id,
      id,
    ],
  );

exports.delete = (id) => db.query('DELETE FROM items WHERE id=$1', [id]);
