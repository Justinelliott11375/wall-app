const postQueries = require("../db/queries.posts.js");

module.exports = {
    index(req, res, next){
        console.log("controller index");
        postQueries.getAllPosts((err, posts) => {
            if(err){
                res.redirect(500, "static/index");
            } else {
                res.render("static/index", {posts});
            }
        })
    },

    create(req, res, next){
        let newPost = {
          name: req.body.name,
          text: req.body.text
        };
        postQueries.addPost(newPost, (err, post) => {

            res.redirect(req.get('referer'));
          
        });
      }
  }