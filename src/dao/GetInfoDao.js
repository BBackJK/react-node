var db = require('../db/connect');
var pool = db.connectionPool;

var SELECT_DATA_BY_EMAIL = `SELECT
    *
FROM
    react.user
WHERE
    email = ?
`;

module.exports = class GetInfoDao {
    constructor() {

    }

    selectDataByEmail (email, callback) {
        pool.query(SELECT_DATA_BY_EMAIL, email, (err, res) => {
            callback(res);
        });
    }
};
