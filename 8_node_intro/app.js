var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var todoRoutes = require("./routes/todos")
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.json({message: "Hello from app file!"});
});

app.use('/api/todos', todoRoutes); //all the routes form todoRoutes will have this prefix: /api/todos

app.listen(port, function(){
  console.log("Server is on air!");
});