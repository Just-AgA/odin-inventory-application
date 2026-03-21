const db = require('../db');

exports.getAll = () => db.query('SELECT * FROM categories ORDER BY name');
