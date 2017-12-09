var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sessions({
    secret: '^%!^ghghd5656752gjghfghf%^^^',
    resave: false,
    saveUninitialized: true
}));


app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/login', function(req, res) {
    session = req.session;
    if (session.uniqueID) {
        res.redirect('/redirects');
    }
    res.sendFile('./files/login.html', {root: __dirname});
});

app.post('/login', function(req, res) {
    // res.end(JSON.stringify(req.body));
    session = req.session;
    if (session.uniqueID) {
        res.redirect('/redirects');
    }
    session.uniqueID = req.body.username;
    res.redirect('/redirects');
});

app.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        console.log(err);
        res.redirect('/login');
    });
});

app.get('/admin', function(req, res) {
    session = req.session;
    if(session.uniqueID == 'admin') {
        res.send('You are the God.'+ ' <a href="/logout">KILL SESSION</a>');
    } else {
        res.send('Unathorized access');
    }
    
});

app.get('/redirects', function(req, res) {
    session = req.session;
    if(session.uniqueID == 'admin') {
        console.log(session.uniqueID);
        res.redirect('/admin');
    } else {
        res.send(req.session.uniqueID + ' not found <a href="/logout">KILL SESSION</a>');
    }
});

app.listen(1337, function() {
    console.log('Listening at port 1337');
});