var express = require("express");

var app = express();

app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

app.get("/cats", function (request, response) {
    response.render('cats');
});
app.get("/cats/1", function (request, response) {
    var cat_data = {food: "pizza", age: 3, spots:["couch", "window", "stairs"]};
    response.render('details', {data: cat_data});
});
app.get("/cats/2", function (request, response) {
    var cat_data = {food: "sandwich", age: 5, spots:["park", "gym"]};
    response.render('details', {data: cat_data});
});
app.get("/cats/3", function (request, response) {
    var cat_data = {food: "tuna", age: 1, spots:["living room", "ballroom"]};
    response.render('details', {data: cat_data});
});