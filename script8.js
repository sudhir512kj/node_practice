var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.send('Hello, from express!!');
});

app.listen(1337, function() {
    console.log('Listening at port 1337');
});