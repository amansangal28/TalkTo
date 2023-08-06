const User =require('../models/user');
module.exports.profile = function(req,res){
    return res.render('user_profile', {
        title: "User Profile"
    });
}
// render Sign Up Page
module.exports.signup = function(req, res){
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "TalkTo | Sign Up"
    })
}
// render Sign In Page
module.exports.signin = function(req, res){
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "TalkTo | Sign In"
    })
}
//Create new user
module.exports.create = function(req,res)
{
    if(req.body.password!=req.body.confirm_password)
    {
        console.log('Password and Confirm Password does not match');
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}).then(function(user){
        if(!user)
        {
            User.create(req.body).then(function(user){
                return res.redirect('/users/sign-in');
            })
        }
        else
        {
            console.log('User Already Exists');
            return res.redirect('back');
        }
    })
}
//Find existing User or Authentication and existing user
module.exports.createSession = function(req,res)
{
    return res.redirect('/');
}

// Signing Out the User
module.exports.destroySession = function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}