var express = require('express');
var app = express();
app.use(express.logger());

text_buffer = fs.readFile('index.html');
//text_string = text_buffer.toString();
text_string = text_buffer;

app.get('/', function(request, response) {
  response.send(text_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
