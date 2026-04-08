const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

router.get('/items/:id', controller.detail);
router.post('/items/new', controller.create);
router.post('/items/:id/edit', controller.update);
router.post('/items/:id/delete', controller.delete);

module.exports = router;
