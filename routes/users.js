var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
//new list
router.get('/new',usersCtrl.new)
//new entry
router.post('/create',isLoggedIn,usersCtrl.create)
//user profile
router.get('/:id',usersCtrl.index);
//user profile lists
router.get('/:id/list',usersCtrl.list)


function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
