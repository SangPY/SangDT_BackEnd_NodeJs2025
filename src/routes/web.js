const express = require('express');
const {getHomepage, getSang, getNodejs, postCreateUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/sang', getSang);

router.get('/nodejs', getNodejs)

router.post('/create-user', postCreateUser );

module.exports = router;