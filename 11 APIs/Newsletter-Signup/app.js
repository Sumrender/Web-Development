const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const https = require("https");

const app = express();

app.use(express.static("public"));
// created a public folder and added files like css and images
// there and are working due to static func of express.

app.use(bodyParser.urlencoded({extended: true})); // for reading form input

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    
    // console.log(fname+" "+lname+" "+email);
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);

    // https we used for get earlier, here we are posting
    https.request(url, options, function(response){
        
    });


});


app.listen(3000, function(){
    console.log("*********server started on port 3000*********");
});


// API key
// 178cf2c140d17f3735ea2e927ea53cf4-us20

// Audience ID
// 15cbcc0696