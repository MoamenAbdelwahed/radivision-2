const express = require('express');
const router = express.Router();
const controller = require('../src/controllers/movieController');

router.get('/', controller.findAll);

module.exports = router;
