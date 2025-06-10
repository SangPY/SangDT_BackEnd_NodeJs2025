const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/sang', (req, res) => {
  res.send('Hello Sang routes nodemon!')
})

router.get('/ngan', (req, res) => {
  res.send('<h1>Hello Ngan routes!</h1>')
})

// app.get('/sample', (req, res) => {
//   res.render('sample.ejs')
// })

module.exports = router;