var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set("view engine", "jade");

app.use(bodyParser.json()); //Application JSON
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.render("calculadora");
});

app.post("/resultado", function(req,res){
  var resultado =0;
  switch(req.body.operacion){
    case "+": resultado = (Number(req.body.x)+Number(req.body.y));
              break;
    case "-": resultado = (Number(req.body.x)-Number(req.body.y));
              break;
    case "*": resultado = (Number(req.body.x)*Number(req.body.y));
              break;
    case "/": resultado = (Number(req.body.x)/Number(req.body.y));
              break;
    default: res.send("Lo sentimos solo se puede escribir +, -, * o / para realizar sus operaciones");
  }
  res.send("El resultado de la operación es: " + resultado );
});

app.listen(8081);
