var BoardWriteDao = require('../../dao/BoardWriteDao');
var co = require('../../util/co');

module.exports = ( req, res) => {
    var boardWriteDao = new BoardWriteDao();
    var division = req.body.div;
    var writeData = [
        req.body.name,
        req.body.title,
        req.body.category,
        req.body.contents
    ]

    co(function* () {
        var insertBoardResult = yield callback => {
            if (division === 'front') {
                boardWriteDao.insertWriteFrontData(writeData, callback);
            }else if (division === 'back') {
                boardWriteDao.insertWriteBackData(writeData,callback);
            }else if (division === 'common') {
                boardWriteDao.insertWriteCommonData(writeData,callback);
            }
        }
        insertBoardResult ? 
            res.status(200).send('success') : 
            res.status(400).send('fail')
    });
};
