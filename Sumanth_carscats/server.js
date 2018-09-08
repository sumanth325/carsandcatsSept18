var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/stylesheets"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

// app.get('/', function (request, res) {
    
//     res.render('index')
// })



// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array});
// })

app.get('/forms', function(req, res){
    res.render('forms')
})
app.get('/cars', function(req, res){
    res.render('cars')
})
app.get('/cats', function(req, res){
    res.render('cats')
})
app.get('/cars/new', function(req, res){
    res.render('forms')
})

app.listen(8000,function() {
    console.log("listening on 8000");
})