var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  text_buffer = fs.readFileSync('index.html')
  text_string = buf.toString(text_buffer);
  response.send(text_string);
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
