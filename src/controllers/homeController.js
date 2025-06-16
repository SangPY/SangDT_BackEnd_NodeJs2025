const connection = require('../config/database')
const {getAllUsers, getUserById, updateUserById} = require('../services/CRUDService')
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
  
  let user = await getUserById(userId);

  res.render('edit.ejs', { userEdit : user}) // x <- y
}

const postCreateUser = async (req, res) => {
  //console.log("Req.body", req.body);

  let email = req.body.emailId;
  let name = req.body.nameId;
  let city = req.body.cityId;

  console.log ("data: ", email, name, city);

  let [results, fields] = await connection.query (
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,[email, name, city]
  );

  //const [results, fields] = await connection.query('select * from Users u');
  console.log('check result', results);

  res.send(' Created user succeed!')
  //INSERT INTO Users (emai)
  //res.send('create a new user successful')
}

const postUpdateUser = async (req, res) => {
  let email = req.body.emailId;
  let name = req.body.nameId;
  let city = req.body.cityId;
  let userId = req.body.userId;

  //console.log ("data: ", email, name, city, userId);

  await updateUserById(email, city, name, userId)

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.userid;
  
  let user = await getUserById(userId);

  res.render('delete.ejs', { userDelete : user})
};

const postHanderRemoveUser = (req, res) => {
  res.send('delete user successful')
}

module.exports = {
    getHomepage,
    getSang,
    getNodejs,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHanderRemoveUser
}