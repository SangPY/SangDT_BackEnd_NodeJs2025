const express = require('express');
const {getHomepage, getSang, getNodejs} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/sang', getSang);

router.get('/nodejs', getNodejs)

module.exports = router;