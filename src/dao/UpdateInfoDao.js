var db = require('../db/connect');
var pool = db.connectionPool;

var UPDATE_USER_INFO = `UPDATE
    react.user
SET
    name = ?,
    password = ?,
    phone = ?
WHERE
    email =?
`;

module.exports = class UpdateInfoDao {
    constructor() {}

    updateInfo (updateData, callback) {
        pool.query(UPDATE_USER_INFO, updateData , (res, err) => {
            // if(res == undefined) {
            //     callback(err);
            // }else {
            //     callback(res);
            // }
            callback(res);
        })
    }
}