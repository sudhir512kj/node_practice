var express = require('express');
var app = express();
var router = express.Router();

app.use('/users', router);

router.get('/:username(\\w+)', function(req, res) {
    res.end(JSON.stringify(req.params));
});

app.listen(1337, function() {
    console.log('Listening at port 1337');
});