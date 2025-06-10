const express = require('express');
const {getHomepage, getSang} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)

router.get('/sang', getSang)

router.get('/ngan', (req, res) => {
  res.send('<h1>Hello Ngan routes!</h1>')
})

// app.get('/sample', (req, res) => {
//   res.render('sample.ejs')
// })

module.exports = router;