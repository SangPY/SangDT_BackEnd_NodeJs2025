const express = require('express')
// import express from 'express';
const path = require('path');

const app = express()
const port = 8080

//config tempalte engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sang', (req, res) => {
  res.send('Hello Sang routes!')
})

app.get('/ngan', (req, res) => {
  res.send('<h1>Hello Ngan routes!</h1>')
})

app.get('/sample', (req, res) => {
  res.render('sample.ejs')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

