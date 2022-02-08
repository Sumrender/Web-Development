
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const data = require(__dirname+'/data.js');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {homeContent : data.homeStartingContent, posts: data.posts});
});

app.post("/", function(req, res){
  const postLink = _.lowerCase(req.body.readPost);
  console.log(postLink);
  res.redirect("/posts/" + postLink);

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: data.aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: data.contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  let post = {title: req.body.postTitle, content: req.body.postContent};
  data.posts.push(post);
  console.log(data.posts);
  res.redirect("/");

})

app.get("/posts/:id", function(req, res){
  let myPost;
  let requestedTitle = _.lowerCase(req.params.id);

  data.posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if(requestedTitle == storedTitle){
      myPost = post;
    }
  });
  res.render("post", {requestedTitle: requestedTitle, post:myPost});

});


app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
