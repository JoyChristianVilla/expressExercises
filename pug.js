var express = require('express');
var app = express();
var path = require('path');
//Set templating engine
app.set('view engine', 'pug');
//Set what directory we are going to view using that templating engine?
app.set('views', process.argv[3]);
//When the user goes to the address with /home, this function will run
app.get('/home', function(req, res) {
  //Not quite sure how this works, but it somehow renders the index file and inserts the date
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
