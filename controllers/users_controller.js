module.exports.profile = function(req,res){
    return res.render('user', {
        title: "User Profile"
    });
}
// render Sign Up Page
module.exports.signup = function(req, res){
    return res.render('user_sign_up', {
        title: "TalkTo | Sign Up"
    })
}
// render Sign In Page
module.exports.signin = function(req, res){
    return res.render('user_sign_in', {
        title: "TalkTo | Sign In"
    })
}