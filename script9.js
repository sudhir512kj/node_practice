var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.get(/^(.+)$/, function(req, res) {
    // console.log(path.join(__dirname, './files/', req.params[0]+'.html'));
    try {
        if(fs.statSync(path.join(__dirname, './files/', req.params[0]+'.html')).isFile()) {
            res.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './files')});
        }   
    } catch (error) {
        console.log(error);
        res.sendFile('404.html', {root: path.join(__dirname, './files')});   
    }
});

app.listen(1337, function() {
    console.log('Listening at port 1337');
});