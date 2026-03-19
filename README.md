# Inventory Management App

A full-stack Inventory Management application built with **Node.js, Express, PostgreSQL, and EJS**.
This project allows users to manage categories and items with full CRUD functionality, while protecting destructive actions using an admin password.

---

## Features

- Create, view, update, and delete **categories**
- Create, view, update, and delete **items**
- Items are linked to categories (relational database)
- Admin password protection for delete/update actions
- Server-side rendering using EJS
- Seed script for generating dummy data

---

## Database Design

### Tables

#### `categories`

- `id` (Primary Key)
- `name` (Unique, required)
- `description` (optional)

#### `items`

- `id` (Primary Key)
- `name` (required)
- `description`
- `price` (required)
- `quantity` (required)
- `category_id` (Foreign Key → categories.id)

---

### Relationships

- One category can have many items (1:N)
- Each item belongs to exactly one category

---

### Constraints

- Categories cannot be deleted if they contain items (`ON DELETE RESTRICT`)

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd inventory-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file:

```
DATABASE_URL=postgresql://username:password@localhost:5432/inventory_db
ADMIN_PASSWORD=yourpassword
```

---

## Database Setup

Create your PostgreSQL database and run:

```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  quantity INTEGER NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE RESTRICT
);
```

---

## Seed the Database

Run the seed script to populate sample data:

```bash
node seed.js
```

---

## Run the App

```bash
node app.js
```

Then open:

```
http://localhost:3000
```

---

## Admin Protection

To prevent unauthorized destructive actions:

- Delete and update routes require an **admin password**
- Password is checked against `.env`

Example:

```
ADMIN_PASSWORD=admin123
```

---

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- EJS
- express-validator
- dotenv

---

## License

This project is for educational purposes.
