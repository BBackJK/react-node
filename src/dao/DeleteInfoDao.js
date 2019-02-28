var db = require('../db/connect');
var pool = db.connectionPool;

var DELETE_USER_INFO_SQL = `DELETE  FROM
    react.user
WHERE
    email=?
`;

module.exports = class DeleteInfoDao {
    constructor() {}

    deleteInfoByEmail (email, callback) {
        pool.query(DELETE_USER_INFO_SQL, email ,(res,err) => {
                callback(res);
        })
    };
};
