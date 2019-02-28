var LoginDao = require('../../dao/LoginDao');
var co = require('../../util/co');

module.exports = (req,res) => {
    var loginDao = new LoginDao();
    var loginData = [
        req.body.email,
        req.body.pw
    ];
    co(function* () {
        var selectByLoginDataResult = yield callback => {
            loginDao.selectLoginData(loginData,callback);
        }
        (selectByLoginDataResult.length != 0) ?
            res.status(200).send(selectByLoginDataResult) :
            res.sendStatus(400);
    });
}
