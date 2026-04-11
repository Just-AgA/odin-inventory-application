const db = require('./db');

async function seed() {
  await db.query('DELETE FROM items');
  await db.query('DELETE FROM categories');

  await db.query(`
    INSERT INTO categories (name) VALUES
    ('Guitars'), ('Keyboards')
  `);

  await db.query(`
    INSERT INTO items (name, price, quantity, category_id)
    VALUES
    ('Fender Stratocaster', 1200, 5, 1),
    ('Yamaha P45', 500, 3, 2)
  `);

  console.log('Database seeded!');
  process.exit();
}

seed();
