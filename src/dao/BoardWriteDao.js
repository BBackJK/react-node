var db = require('../db/connect');
var pool = db.connectionPool;

var INSERT_WRITE_DATA_FRONT_SQL = `INSERT INTO
    react.front_board
SET
    user_name = ?,
    title = ?,
    category = ?,
    contents = ?
`;

var INSERT_WRITE_DATA_BACK_SQL = `INSERT INTO
    react.back_board
SET
    user_name = ?,
    title = ?,
    category = ?,
    contents = ?
`;

var INSERT_WRITE_DATA_COMMON_SQL = `INSERT INTO
    react.common_board
SET
    user_name = ?,
    title = ?,
    category = ?,
    contents = ?
`;

/**
 * seq인덱싱값 초기화
 * ALTER TABLE react.? AUTO_INCREMENT=1;
 */

module.exports = class BoardWriteDao {
    constructor() {}

    //front_board에 글 삽입.
    insertWriteFrontData (writeData, callback) {
        pool.query(INSERT_WRITE_DATA_FRONT_SQL, writeData , (err, res) => {
            callback(res);
        });
    }

    //back_board에 글 삽입.
    insertWriteBackData (writeData, callback) {
        pool.query(INSERT_WRITE_DATA_BACK_SQL, writeData, (err, res) => {
            callback(res);
        });
    }
    
    //common_board에 글 삽입.
    insertWriteCommonData (writeData, callback) {
        pool.query(INSERT_WRITE_DATA_COMMON_SQL, writeData, (err, res) => {
            callback(res);
        });
    }
};
