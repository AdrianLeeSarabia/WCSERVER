//Activity Name: firstexpress.js
//Author Name: Sarabia, Adrian Lee S.
//Section and Code: WD - 202 / 2083

const {response} = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, response){
  response.send("Hello World! I am Adrian Lee S. Sarabia");
});

app.listen(3000, function(){ 
  console.log('Server running at http://localhost:3000');
}
);