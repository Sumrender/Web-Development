const express = require('express');   // for using all the code written below
const https = require('https');       // for posting request to external api Server

const bodyParser = require('body-parser'); // to read form data or data entered by user

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    
    var query = req.body.containsWord;
    console.log(query);
    console.log("*******************************************");
    //res.send("app is running ")   // can only use 1 send in 1 get
    const url = "https://v2.jokeapi.dev/joke/Any?type=single&contains="+query;
    
    https.get(url, function(response){
        console.log(response.statusCode);
        console.log("************* jokeapi working**********");

        response.on("data", function(data){
            // console.log(data); // notice that it shows hexadecimal code
            const myData = JSON.parse(data);            
            // console.log(myData);
            const joke = myData.joke;
        //     console.log(joke);
            
            res.write("Joke below: \n");
            res.write(joke);
            res.send();   // use single send but write multiple times
        });
    });

})

app.listen(3000, function(){
    console.log("Joker Server started");
});
