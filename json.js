var express = require('express');
//require fs for file system methods
var fs = require('fs');
var app = express();
//declare variable to hold json later on
var object;
//When the user searches the address with /books, the function will run
app.get('/books', function(req, res) {
  //The file supplied as a command line argument will be read
  fs.readFile(process.argv[3], function(err, data) {
    //In the callback function, if there is an error, the response the user wil see will be a status 500
    if (err) return res.sendStatus(500);
    //If the file can be read, it will be turned into json and assigned to object
    try {
      object = JSON.parse(data);
      //If there is an error parsing the data, the response will be a status 500
    } catch (err) {
      res.sendStatus(500);
    }
    //Otherwise, the response will be the json object.
    res.json(object);
  });
});
app.listen(process.argv[2]);
