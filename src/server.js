require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const { connect } = require('http2');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
const mysql=require('mysql2');

configViewEngine(app);

//khai bao routes
app.use('/', webRoutes);

//test connection
const connection=mysql.createConnection({ 
  host: 'localhost', 
  user: 'root', 
  database: 'SangDT_Nodejs', 
  port: 3307, 
  password: '123456'
  }); 
  
// simple query
connection.query(
  'select * from Users u',
  function (err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

