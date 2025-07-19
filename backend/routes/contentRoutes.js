const express = require('express');
const router = express.Router();
const { getAllContent } = require('../controllers/contentController');

router.get('/', getAllContent);

module.exports = router;