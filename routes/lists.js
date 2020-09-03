var router = require('express').Router();
var listsCtrl = require('../controllers/lists');

//list page
router.get('users/:id/lists',listsCtrl.create)
//new list
router.post('users/:id/lists',isLoggedIn,listsCtrl.new)


function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
