var express = require('express');
var app = express();
var router = express.Router();

app.use('/myFirstRoute', router);

router.get('/heyThereFirstRoute', function(req, res) {
    res.end('What is going on!');
});

router.get('/heyThereSecondRoute', function(req, res) {
    res.end('What is going on!, this is a bit different!');
});

app.listen(1337, function() {
    console.log('Listening at port 1337');
});