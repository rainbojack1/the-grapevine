var express = require("express");
var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./../models");

// Set homepage
router.get("/", function(req, res){
    db.Article.find({})
    .then(function(dbArticle){
        var hbsObject = {
            articles: dbArticle
        };
    //   res.json(dbArticle);
    res.render("index", hbsObject);
    })
    .catch(function(err){
      res.json("There was an error retrieving the articles. \n", err);
    });
    
})

// GET route to scrape Google News
router.get("/scrape", function(req, res) {
    // Save an empty result object
    var result = {};
    
    axios
      .get("https://news.google.com/?hl=en-US&gl=US&ceid=US:en")
      .then(function(response) {
        var $ = cheerio.load(response.data);
  
        $("article .QmrVtf .SVJrMe").each(function(i, element) {
          
            // Add the text and href of every link, and save them as properties of the result object
            result.srcName = $(this)
              .children("a")
              .text();            
          });

        $("article h3").each(function(i, element) {         
  
          // Add the text and href of every link, and save them as properties of the result object
          result.title = $(this)
            .children("a")
            .text();
          result.link = $(this)
            .children("a")
            .attr("href");
  
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
  router.get("/api/articles", function(req, res){
    db.Article.find({})
    .then(function(dbArticle){
      res.json(dbArticle);
    })
    .catch(function(err){
      res.json("There was an error retrieving the articles. \n", err);
    })
  });

module.exports = router;