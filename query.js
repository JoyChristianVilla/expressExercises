var express = require('express');
var app = express();
//When someone puts in the address with /search? followed by a query string, req.query becomes an object full of all the information from the query string
app.get('/search', function(req, res) {
  var object = req.query;
  //The object is then sent as the response, so the user will see it
  res.send(object);
})
app.listen(process.argv[2]);
