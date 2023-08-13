const Post = require('../models/post');
module.exports.home = function(req, res){
    Post.find({}).populate('user').then(function(posts){
        return res.render('home', {
            title: "TalkTo | Home",
            posts: posts
        });
    });
}