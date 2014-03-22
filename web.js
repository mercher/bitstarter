var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  text_buffer = fs.readFile('index.html');
  text_string = text_buffer.toString();
  response.send(text_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
