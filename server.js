var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");

//Require .env file
// require("dotenv").config();

// Require all models
// var db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/app_routes.js");

app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

/*
// GET route to scrape Google News
app.get("/scrape", function(req, res) {
  axios
    .get("https://news.google.com/?hl=en-US&gl=US&ceid=US:en")
    .then(function(response) {
      var $ = cheerio.load(response.data);

      $("article h3").each(function(i, element) {
        // Save an empty result object
        var result = {};

        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");

        // console.log("Result: ", result);

        // Create a new Article from each response element
        db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err){
          console.log("There was a problem saving the scraped articles.\n", err);
        });
      });

      res.send("Your news has been scraped!");
    });
});

// GET route to retrieve all articles from db
app.get("/articles", function(req, res){
  db.Article.find({})
  .then(function(dbArticle){
    res.json(dbArticle);
  })
  .catch(function(err){
    res.json("There was an error retrieving the articles. \n", err);
  })
});*/