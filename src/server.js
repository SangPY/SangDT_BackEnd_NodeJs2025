require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const { connect } = require('http2');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
const connection = require('./config/database') 

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

configViewEngine(app);

//khai bao routes
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

