var router = require('express').Router();
var coinsCtrl = require('../controllers/coins');

//coin page
router.get('/coins/:id', coinsCtrl.create)
//delete a coin
router.delete('/coins/:id',isLoggedIn,coinsCtrl.del)

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())return next();
    res.redirect('/auth/google');
}

module.exports = router;
