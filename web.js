var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

//var text_buffer = new Buffer(128);
var text_buffer = fs.readFileSync('index.html');
//text_buffer.write("Hello ...");
var text_string = text_buffer.toString();

app.get('/', function(request, response) {
  response.send(text_string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
