var express = require('express');
var app = express();
app.use(express.logger());

var text_buffer = new Buffer(128);
//text_buffer = fs.readFileSync('index.html');
text_buffer.write("Hello ...");
var text_string = text_buffer.toString();

app.get('/', function(request, response) {
  response.send(text_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
