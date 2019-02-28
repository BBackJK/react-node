var GetInfoDao = require('../../dao/GetInfoDao');
var co = require('../../util/co');

module.exports = (req, res) => {
    var getInfoDao = new GetInfoDao();
    var getInfoEmail = req.params.email;

    co(function* () {
        var selectResult = yield callback => {
            getInfoDao.selectDataByEmail (getInfoEmail, callback);
        }
        selectResult ?
            res.status(200).json(selectResult):
            res.sendStatus(400);
    });
};
