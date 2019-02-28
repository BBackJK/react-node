var db = require('../db/connect');
var pool = db.connectionPool;

var SELECT_EMAIL_FIND_DATA_SQL = `SELECT
    email
FROM
    react.user
WHERE
    name = ?
AND 
    phone = ?
`;

var SELECT_PW_FIND_DATA_SQL = `SELECT
    password
FROM
    react.user
WHERE
    email = ?
AND
    name = ?
`;

module.exports = class FindAccountDao {
    constructor() {

    }

    /**
     * @type {function}
     * @param {Array} findEmailData [name, phone]
     * @param {function} callback 
     */
    selectEmailFindData (findEmailData, callback) {
        pool.query(SELECT_EMAIL_FIND_DATA_SQL, findEmailData, (err, res) => {
            callback(res);
        });
    }

    /**
     * @type {function}
     * @param {Array} findPWData [email, name]
     * @param {function} callback 
     */
    selectPWFindData (findPWData, callback) {
        pool.query(SELECT_PW_FIND_DATA_SQL, findPWData, (err, res) => {
            callback(res);
        });
    }
}
