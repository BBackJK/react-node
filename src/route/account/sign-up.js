var SignUpDao = require('../../dao/SignUpDao');
var co = require('../../util/co');

/**
 * @type {function} 
 * @param {Object} req
 * @param {Object} res
 */
module.exports = (req, res) => {
    var signUpDao = new SignUpDao();
    var signUpData = [
        req.body.email,
        req.body.name,
        req.body.password,
        req.body.phone
    ];

    co(function* () {
        var insertResult = yield callback => {
            signUpDao.insertSignUpData (signUpData, callback);                       
        }
        if(insertResult.errno == 1062) {
            res.status(400).send('existed');
        }
        else {
            insertResult ?
            res.status(200).send('success') :
            res.status(400).send('fail');   
        }
    });

};
