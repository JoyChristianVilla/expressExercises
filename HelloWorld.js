//Require express module
var express = require('express');
//Instantiate express - What exactly does that mean?
var app = express();
//app.get means that when someone puts the address in, this function will run
app.get('/home', function(req, res) {
  //The server's response to the client will be 'Hello World!'
  res.end('Hello World!');
});
//The port will be assigned as a command line argument
app.listen(process.argv[2]);
