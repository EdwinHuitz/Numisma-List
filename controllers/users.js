const User = require('../models/user');
const List = require('../models/list')

module.exports = {
  index,create:createEntry
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

function createEntry(res,req){}