const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController');

router.get('/', controller.list);
router.get('/categories/:id', controller.detail);

router.post('/categories/new', controller.create);

router.post('/categories/:id/edit', controller.update);
