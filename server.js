//keep private
var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 8001 );
app.set('view engine','hbs');
app.use("/static",express.static(path.resolve("static")));
app.use("/lectures",express.static(path.resolve("lectures")));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render("index");
})

app.get('/about', function(req,res){
    res.render("about");
})

app.get('/resources', function(req,res){
    res.render("resources");
})

app.get('/schedule/lectures', function(req,res){
    res.render("schedule/lectures22-23");
})

app.get('/schedule/lectures21-22', function(req,res){
    res.render("schedule/lectures21-22");
})

app.get('/schedule/lectures20-21', function(req,res){
    res.render("schedule/lectures20-21");
})

app.get('/schedule/lectures19-20', function(req,res){
    res.render("schedule/lectures19-20");
})

app.get('/nav', function(req,res){
    res.render('nav');
})

app.get('/dropdown', function(req,res){
    res.render('dropdown');
})

var server = app.listen(app.get('port'),function(){
    console.log("Server is running...");
    console.log( 'Express server started on port: '+server.address().port );
})
