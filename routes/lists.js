var router = require('express').Router();
var listsCtrl = require('../controllers/lists');

//new list
router.post('/users/:id/lists',listsCtrl.new)
//list page
router.get('/users/:id/lists',listsCtrl.create)

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
