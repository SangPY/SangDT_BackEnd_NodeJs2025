const connection = require('../config/database')
const {getAllUsers} = require('../services/CRUDService')
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

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render('home.ejs', {listUsers: results})
}

const getSang = (req, res) => {
  res.send('Hello Sang routes nodemon! MVC')
}

const getNodejs = (req, res) => {
  res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
  const userId = req.params.userid;
  // console.log("param", req.params, userId)
  let [results, fields] = await connection.query(`select * from Users where id = ? `, [userId]);
  console.log('result', results);

  let user  = results && results.length > 0 ? results[0] : {};

  res.render('edit.ejs', { userEdit : user})
}

const postCreateUser = async (req, res) => {
  //console.log("Req.body", req.body);

  let email = req.body.emailId;
  let name = req.body.nameId;
  let city = req.body.cityId;

  console.log ("data: ", email, name, city);

  // connection.query(
  //   ` INSERT INTO Users (email, name, city)
  //     VALUES (?,?,?) `,
  //     [email, name, city],
  //     function (err, results) {
  //       console.log (results);
  //       res.send(' Create user succeed !');
  //     }
  // );

  let [results, fields] = await connection.query (
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,[email, name, city]
  );

  //const [results, fields] = await connection.query('select * from Users u');
  console.log('check result', results);

  res.send(' Created user succeed!')
  //INSERT INTO Users (emai)
  //res.send('create a new user successful')
}

module.exports = {
    getHomepage,
    getSang,
    getNodejs,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}