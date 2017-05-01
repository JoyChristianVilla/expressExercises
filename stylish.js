var express = require('express');
var app = express();
//Somehow the stylus middleware adds a css stylesheet to the static html file served?
app.use(require('stylus').middleware(process.argv[3] || path.join(__dirname, 'public')));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
