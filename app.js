'use strict'

var express = require('express');
var bparser = require('body-parser');
var cors = require('cors');

var app = express();

//header.. middleware
// var header = require('./src/middleware/header');

//body parser
app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());

//routes
var signUp = require('./src/route/account/sign-up');
var login = require('./src/route/account/login');
var findAccount = require('./src/route/account/find-account');
var getInfo = require('./src/route/account/getInfo');
var updateInfo = require('./src/route/account/update-info');
var deleteInfo = require('./src/route/account/delete-info');

var boardWrite = require('./src/route/board/board-write');
var boardList = require('./src/route/board/board-list');

// app.use(header());

app.use(cors());

//end points
app.post('/sign-up',signUp);
app.post('/login',login);
app.post('/find-account',findAccount);
app.post('/update-info',updateInfo);
app.post('/board-write',boardWrite);
app.get('/getInfo/:email',getInfo);
app.get('/delete-info/:email',deleteInfo);
app.get('/board-list/:div',boardList);
app.get('/logout',(req,res) => {
    res.send('success');
});
app.listen(5000, () => {
    console.log('listening on port 5000!');
});
