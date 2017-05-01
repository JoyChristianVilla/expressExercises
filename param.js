var express = require('express');
var app = express();
//app.put means updating - don't really understand how this works
//whatever comes after the colon is the parameter we're looking for
app.put('/message/:id', function (req, res) {
  //req.params is the object that was automatically created by using app.put?
  var id = req.params.id;
  //require crypto module to create the sha1 hash? (Don't fully understand how this works)
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  //string gets sent as response... but where does it get sent to?
  res.send(str)
})
app.listen(process.argv[2])
