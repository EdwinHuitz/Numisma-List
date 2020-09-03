const User = require('../models/user');
const List = require('../models/list')

module.exports = {
  index,new:newList,create:createEntry,list:createList
};

function index(req, res)
{
  User.findById(req.params.id,
    function(err,usr){
      List.find({usr:usr._id},function(err,lists){
        res.render('users/profile', { user:usr, lists, title:usr.name})
      })
    })
}
function newList(res,req)
{
  User.findById(req.params.id,function(err,usr){res.redirect('users/profile', {user:usr._id,title:'New List'})})
}
function createList(res,req){}
function createEntry(res,req){}