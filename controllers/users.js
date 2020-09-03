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
        res.render(`users/profile`, { user:usr, lists, title:usr.name})
      })
    })
}
function newList(res,req){}
function createList(res,req){}
function createEntry(res,req){}