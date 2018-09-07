var express = require("express");
console.log("Let's find out what express is", express);
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');




app.get('/', function(request, response) {
       response.sendfile("static/main.html");
    })

app.get('/cars', function(request, response) {
    response.render("cars");
    })

app.get('/cats', function(request, response) {
    response.render("cats");
    })
app.get('/cars/new', function(request, response) {
    response.render("new");
    })


app.listen(8000, function() {
    console.log("listening on port 8000");
    })
      