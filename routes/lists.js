var router = require('express').Router();
var listsCtrl = require('../controllers/lists');

//new list
router.post('/users/:id/lists',isLoggedIn,listsCtrl.new)
//list page
router.get('/lists/:id',listsCtrl.create)
//add a coin
router.put('/lists/:id',isLoggedIn,listsCtrl.add)
//delete the list
router.delete('/lists/:id',isLoggedIn,listsCtrl.del)
//request a coin be added
router.post('/lists/:id/req',isLoggedIn,listsCtrl.req)


function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
