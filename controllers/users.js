const User = require('../models/user');
const List = require('../models/list')

module.exports = {
  index,create:createEntry
};

function index(req, res)
{
  User.findById(req.params.id,
    function(err,usr){
      
      List.find({Author_ID:usr},function(err,lists){
        res.render('users/profile', { user:req.user?req.user:null,lists, title:req.user.name})
      })
    })
}

function createEntry(res,req){}