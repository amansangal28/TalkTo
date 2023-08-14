const Post = require('../models/post');
const Comment = require('../models/comment');
module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }).then(function(post){
        return res.redirect('back');
    });
}
module.exports.destroy = function(req, res){
    Post.findById(req.params.id).then(function(post){
        if(post.user == req.user.id){
            post.deleteOne();
            console.log(req.params.id);
            Comment.deleteMany({post: req.params.id}).exec();
        }
        return res.redirect('back');
    })
}