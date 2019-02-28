var DeleteInfoDao = require('../../dao/DeleteInfoDao');
var co = require('../../util/co');

module.exports = (req, res) => {
    var deleteInfoDao = new DeleteInfoDao();
    var email = req.params.email;

    console.log(email);

    co(function* () {
        var deleteResult = yield callback => {
            deleteInfoDao.deleteInfoByEmail(email, callback);
        }
        console.log(deleteResult);
        deleteResult ? 
            res.status(200).send('success'):
            res.status(400).send('fail');
    })
}
