const Comment = require('../models/comment');
const Post = require('../models/post');
module.exports.create = function(req, res){
    Post.findById(req.body.post).then(function(post){
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }).then(function(comment){
                console.log(`Comments Added are ${comment}`);
                post.comments.push(comment);
                post.save();
                return res.redirect('back');
            });
        }
    });
}
module.exports.destroy = function(req,res){
    Comment.findById(req.params.id).then(function(comment){
        if(comment.user == req.user.id){
            let postId = comment.post;
            comment.deleteOne();
            Post.findByIdAndUpdate(postId, {$pull: {comments: req.params.id}}).exec();
        }
            return res.redirect('back');
    });
}