var router = require('express').Router();
var listsCtrl = require('../controllers/lists');
var coinsCtrl = require('../controllers/coins');

//new list
router.post('/users/:id/lists',isLoggedIn,listsCtrl.new)
//list page
router.get('/lists/:id',listsCtrl.create)
//add a coin
// router.post('/lists/:id',isLoggedIn,coinsCtrl.new)
// //request a coin be added
// router.post('/lists/:id/req',isLoggedIn,coinsCtrl.req)

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
