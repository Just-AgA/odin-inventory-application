const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

router.get('/items/:id', controller.detail);
