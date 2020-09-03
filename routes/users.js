var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/new',isLoggedIn,usersCtrl.new)
router.post('/',isLoggedIn,usersCtrl.create)
router.get('/:id',usersCtrl.index);
router.get('/',usersCtrl.list)


function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
