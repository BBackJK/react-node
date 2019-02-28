var UpdateInfoDao = require('../../dao/UpdateInfoDao');
var co = require('../../util/co');

module.exports = (req, res) => {
    var updateInfoDao = new UpdateInfoDao();
    var updateData = [
        req.body.name,
        req.body.pw,
        req.body.phone,
        req.body.email
    ]

    console.log(updateData);

    co(function* () {
        var updateResult = yield callback => {
            updateInfoDao.updateInfo(updateData, callback);
        }
        
        updateResult ?
            res.status(200).send('success') :
            res.status(400).send('fail');
    });
};
