const User = require('../models/user');
const List = require('../models/list');
const Coin = require('../models/coin');
module.exports = {
  index,create:createEntry
};

function index(req, res)
{
  User.findById(req.params.id,
    function(err,usr){
      let coins;
      Coin.find({authorId:usr._id},(err,a)=>{coins=a});
      //console.log(coins);
      List.find({authorId:usr},function(err,lists){
        //console.log(lists)
        res.render('users/profile', { user:req.user?req.user:null, coins, lists, title:req.user.name})
      })
    })
}

function createEntry(res,req){}