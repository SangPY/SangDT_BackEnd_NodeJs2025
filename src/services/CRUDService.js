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

const updateUserById = async (email, city, name, userId) => {
    let [results, fields] = await connection.query (
        `UPDATE Users
        SET email = ?, city = ?, name = ? 
        WHERE id = ?`,
     [email, city, name, userId]
  );

}

const deleteUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users Where id = ? `, 
    [userId]
  );
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}