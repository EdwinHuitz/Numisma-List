var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
//user profile
//router.get('/',isLoggedIn,function(req,res){res.redirect(`/users/${req.params.id}`)});
router.get('/:id',usersCtrl.index);


function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
