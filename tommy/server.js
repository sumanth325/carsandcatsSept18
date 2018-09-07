var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(express.static(__dirname + "/static"))
app.use(bodyParser.urlencoded({extended:true}))
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs')

var cars = [
    {make:'Nissan', model:'GTR', price: 94999.00, feature:["random1", "random2", "random3"]},
    {make:'Subaru', model:'WRX', price: 34999.00, feature:["random3", "random4", "random5"]},
    {make:'BMW', model:'M3', price: 64999.00, feature:["random6", "random7", "random8"]},
    {make:'Audi', model:'r8', price: 98999.00, feature:["random9", "random10", "random11"]}
]

app.get("/car", function(request, response){ 
    response.render('cars', {carz : cars})
})

app.get("/car/:cartype", function(request, response){
    var cartype = request.params.cartype
    for (var i in cars){
        if(cars[i].model == cartype){
            var thisCar = cars[i]
        }
    }
    console.log(thisCar)
    response.render('thisCar', {car : thisCar})
})
app.get('/newcar', function(request, response){
    response.render('newcar')
})
app.post('/newcar', function(request, response){
    console.log("------------------- \n\n", request.body)
})

app.listen(6969)