var express = require('express');
var app = express();
app.use(express.logger());

var text_buffer = fs.readFileSync('index.html');
var text_string = text_buffer.toString();

app.get('/', function(request, response) {
  response.send(text_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
