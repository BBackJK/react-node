var db = require('../db/connect');
var pool = db.connectionPool;

var SELECT_LOGIN_DATA_SQL = `SELECT 
    *
FROM
    react.user
WHERE
    email = ?
AND
    password = ?
`;

module.exports = class LoginDao {
    constructor() {
    
    }

    /**
     * @type {function}         
     * @param {Array} loginData [email, password]
     * @param {function} callback
     */

     selectLoginData (loginData, callback) {
         pool.query(SELECT_LOGIN_DATA_SQL, loginData ,( err, res) => {
             callback(res);
         });
     }

}
