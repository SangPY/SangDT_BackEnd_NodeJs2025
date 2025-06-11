const connection = require('../config/database')

const getHomepage = (req, res) => {
  let users = [];

  // simple query
  connection.query(
    'select * from Users u',
    function (err, results, fields) {
      users = results;
      console.log(results);
      // console.log(fields);
      
    res.send(JSON.stringify(users))
    }
  );
}

const getSang = (req, res) => {
  res.send('Hello Sang routes nodemon! MVC')
}

const getNodejs = (req, res) => {
  res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getSang,
    getNodejs
}