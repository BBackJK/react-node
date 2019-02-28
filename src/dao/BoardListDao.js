var db = require('../db/connect');
var pool = db.connectionPool;

var SELECT_DATA_FRONT_SQL = `SELECT
    *
FROM
    react.front_board
`;

var SELECT_DATA_BACK_SQL = `SELECT
    *
FROM
    react.back_board
`;

var SELECT_DATA_COMMON_SQL = `SELECT
    *
FROM
    react.common_board
`;

module.exports = class BoardListDao {
    constructor() {}

    selectFrontData(callback) {
        pool.query(SELECT_DATA_FRONT_SQL,(err, res) => {
            callback(res);
        })
    };

    selectBackData(callback) {
        pool.query(SELECT_DATA_BACK_SQL,(err, res) => {
            callback(res);
        })
    };

    selectCommonData(callback) {
        pool.query(SELECT_DATA_COMMON_SQL,(err, res) => {
            callback(res);
        })
    }
};
