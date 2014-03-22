var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  text_buffer = fs.readFileSync('index.html', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  
  text_string = text_buffer.toString();
  response.send(text_string);
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
