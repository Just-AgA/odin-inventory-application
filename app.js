const express = require('express');
const categoryRoutes = require('./routes/categoryRoutes');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);
