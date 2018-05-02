var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var todoRoutes = require("./routes/todos")
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get("/", function(req, res){
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes); //all the routes form todoRoutes will have this prefix: /api/todos

app.listen(port, function(){
  console.log("Server is on air!");
});