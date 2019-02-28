var db = require('../db/connect');
var pool = db.connectionPool;

var INSERT_SIGN_UP_SQL = `INSERT INTO
    react.user
SET
    email = ?,
    name = ?,
    password = ?,
    phone = ?
`;

// var SELECT_SIGN_UP_DATA_BY_ID = `SELECT 
//     *
// FROM
//     react.user
// WHERE
//     email = ?
// `

module.exports = class SignUpDao {
    constructor () {}

    /**
     * @type {function}
     * @param {Array} signUpData [email,name,password,phone]
     * @param {function} callback 
     */
    insertSignUpData (signUpData, callback) {
        pool.query(INSERT_SIGN_UP_SQL, signUpData, (err, res) => {
            callback(res);
        });
    }
};
