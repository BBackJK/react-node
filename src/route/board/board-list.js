var BoardListDao = require('../../dao/BoardListDao');
var co = require('../../util/co');

module.exports = (req, res) => {
    var boardListDao = new BoardListDao();
    var division = req.params.div;

    co(function* () {
        var selectBoardListResult = yield callback => {
            if(division === 'front') {
                boardListDao.selectFrontData(callback);
            }else if(division ==='back') {
                boardListDao.selectBackData(callback);
            }else if(division === 'common') {
                boardListDao.selectCommonData(callback);
            }
        }
        selectBoardListResult ?
            res.status(200).json(selectBoardListResult):
            res.sendStatus(400);
    });
};
