var express = require("express");
var random = require("./random-color");
var jokes = require("./jokes");
//var text = require("./text");

var app = express();
var path = require("path");
var port = process.env.PORT || 3000;

app.use( express.static(path.join(__dirname, "app")));
//Express will use files from /app folder

app.listen(port, function() {
  console.log('app server started on port', port);
});   //starts server on port 3000 http://locahost:3000

app.get("/color", function (req, res) {
  res.send(random());
});

app.get('/jokes', function (req, res) {
  res.json(jokes);
});


app.get('/text', function (req, res){
  res.send();  //still dont get how this app.get works
});// i put multiple things in res.send() and it didnt respond
