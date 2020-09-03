var router = require('express').Router();
var listsCtrl = require('../controllers/lists');

// GET /users
router.get('/:id/lists',listsCtrl.create)
//new list
router.post('/:id/lists',isLoggedIn,listsCtrl.new)


function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
