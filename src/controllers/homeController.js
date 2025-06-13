const connection = require('../config/database')

// const getHomepage = (req, res) => {
//   let users = [];

//   // simple query
//   connection.query(
//     'select * from Users u',
//     function (err, results, fields) {
//       users = results;
//       console.log(results);
//       // console.log(fields);
      
//     res.send(JSON.stringify(users))
//     }
//   );
// }

const getHomepage = (req, res) => {
  
  return res.render('home.ejs')
}

const getSang = (req, res) => {
  res.send('Hello Sang routes nodemon! MVC')
}

const getNodejs = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  //console.log("Req.body", req.body);

  let email = req.body.emailId;
  let name = req.body.nameId;
  let city = req.body.cityId;

  console.log ("data: ", email, name, city);

  connection.query(
    ` INSERT INTO Users (email, name, city)
      VALUES (?,?,?) `,
      [email, name, city],
      function (err, results) {
        console.log (results);
        res.send(' Create user succeed !');
      }
  );

  //INSERT INTO Users (emai)
  //res.send('create a new user successful')
}

module.exports = {
    getHomepage,
    getSang,
    getNodejs,
    postCreateUser
}