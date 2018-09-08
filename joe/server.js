// loads espress module
var express = require('express');
var app = express();

// tells express to look in the static and views folder
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');

// tells us to use ejs 
app.set('view engine', 'ejs');

// what we use for different routes
app.get('/', function (req,res) {
    res.render('index')
})
app.get('/cars', function (req,res) {
    res.render('cars')
})
app.get('/cats', function (req,res) {
    res.render('cats')
})
app.get('/cars/new', function (req,res) {
    res.render('new')
})

//lists to the port
app.listen(8000, function() {
    console.log("listening on port 8000")
})