const express = require('express');
const {getHomepage, getSang, getNodejs, postCreateUser, 
    getCreatePage, getUpdatePage, postUpdateUser
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/sang', getSang);

router.get('/nodejs', getNodejs);

router.get('/create', getCreatePage);

router.get('/update/:userid', getUpdatePage);

router.post('/create-user', postCreateUser );

router.post('/update-user', postUpdateUser );

module.exports = router;