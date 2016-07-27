var express = require("express");
// var path = require('path');
var api = require("./api");

var app = express();

app.use(express.static('./client'));

app.use('/api', api);

app.get('*', function (req, res) {
    res.sendfile('client/index.html');
  })

// app.all('/*', function (req, res) {
//     res.sendFile(path.resolve('index.html'));
//   })

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('listening on localhost ' + port);
  });

