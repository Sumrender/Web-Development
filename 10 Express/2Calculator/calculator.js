const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// bodyParser.urlencoded({extended: true}) used for forms;
// bodyParser.json) is otherwise used
const port = 3000;

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  // able to use because of body parser: req.body;
  console.log(req.body);
  // console.log(req.body.num1);
  var num1 = (Number)(req.body.num1);
  var num2 = (Number)(req.body.num2);

  res.send("Result is " +(num1 + num2));
});


app.listen(port, function(){
  console.log("Server is running on port "+ port);
});
