var router = require('express').Router();
var listsCtrl = require('../controllers/lists');

//new list
router.post('/users/:id/lists',isLoggedIn,listsCtrl.new)
//list page
router.get('/users/lists/:id',listsCtrl.create)

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
