var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var coinsCtrl = require('../controllers/coins');
// GET /users
//user profile
router.get('/',isLoggedIn,function(req,res){res.redirect(`/users/${req.user._id}`)})
//add a coin
router.post('/:id',isLoggedIn,coinsCtrl.new)
router.get('/:id',usersCtrl.index);

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
