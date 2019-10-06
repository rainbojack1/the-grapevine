# the-grapevine
A web app that lets users view and leave comments on the latest news.

## Technologies Used
   1. express

   2. express-handlebars

   3. mongoose

   4. cheerio

   5. axios

   6. heroku
        **NOTE** In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively.
        <!-- https://heardit-on-the-grapevine.herokuapp.com/  -->

## Instructions

* Create an app that accomplishes the following:

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article (if applicable)

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.


## Hints
* Make sure you use a website that displays articles, not a news api. 
* Use the inspector on your browser to determine the layout of the data; you want to be a specific as possible when drilling down the scraped data.
* Check to make sure the url that is being passed is not missing a base url.
* You may have to do more than one for each loop through the data to get meaningful results. 


### Helpful Links
* [MongoDB Documentation](https://docs.mongodb.com/manual/)
* [Mongoose Documentation](http://mongoosejs.com/docs/api.html)
* [Cheerio Documentation](https://github.com/cheeriojs/cheerio)
* [Deployment Guide](https://devcenter.heroku.com/articles/mongolab)