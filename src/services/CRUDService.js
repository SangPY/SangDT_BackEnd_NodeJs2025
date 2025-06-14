const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        'Select * from Users'
    );
    return results;
}

const getUserById = async (userId) => {
    // console.log("param", req.params, userId)
    let [results, fields] = await connection.query(`select * from Users where id = ? `, [userId]);
  
    //console.log('result', results);

    let user  = results && results.length > 0 ? results[0] : {};

    return user;
}

module.exports = {
    getAllUsers,
    getUserById
}