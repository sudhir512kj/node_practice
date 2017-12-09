var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
    res.cookie('myFirstCookie', 'Looks Good');
    res.end('Wow');
});

app.get('/clearCookie', function(req, res) {
    res.clearCookie('myFirstCookie');
    res.end('Wow');
});

app.listen(1337, function() {
    console.log('Listening at port 1337');
});