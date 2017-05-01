//Require express and instantiate it
var express = require('express');
var app = express();
//Require the path module
var path = require('path');
//What is static middleware?
//Does middleware just mean express methods, and you have to call them by first using app.use?
//Does serving a static file just mean that by using the static method, the whole text of the file will be displayed when the user goes to the port number?
//Why did we have to use path.join(__dirname, 'public'), and what exactly does that mean?
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
//Port will be assigned as a command line argument
app.listen(process.argv[2]);
