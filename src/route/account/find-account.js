var FindAccountDao = require('../../dao/FindAccountDao');
var co = require('../../util/co');

module.exports = (req, res) => {
    var findAccountDao = new FindAccountDao();
    var findEmailData = [
        req.body.name_email,
        req.body.phone
    ];

    var findPWData = [
        req.body.email,
        req.body.name_pw
    ];

    co(function* () {
        if((req.body.name_email != undefined) && (req.body.phone != undefined)){
            var findEmailResult = yield callback => {
                findAccountDao.selectEmailFindData(findEmailData,callback);            
            }
            (findEmailResult.length != 0 ) ?
                res.status(200).send(findEmailResult) :
                res.sendStatus(400) ;
        }
        else {
            var findPWResult = yield callback => {
                findAccountDao.selectPWFindData(findPWData, callback);
            }
            (findPWResult.length != 0) ?
                res.status(200).send(findPWResult) :
                res.sendStatus(400);
        }
    })
}