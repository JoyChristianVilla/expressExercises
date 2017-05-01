var express = require('express');
var app = express();
//Require the body-parser module
var bodyparser = require('body-parser');
//Use the bodyparser middleware urlencoded
//Not sure why {extended: false} or what exactly bodyparser.urlencoded does
app.use(bodyparser.urlencoded({extended: false}));
//Don't understand how this works in the real World
//Somehow this must make it so what the user puts into the form gets reversed and sent back to them?
app.post('/form', function(req, res) {
res.send(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);
