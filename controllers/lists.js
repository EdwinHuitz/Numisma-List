const User = require('../models/user');
const List = require('../models/list')

module.exports = {
  new:newList,create:createList
};
function newList(res,req)
{
  console.log('abc 123!!!');
  User.findById(req.params.id,function(err,usr)
  {
    req.body.Author_ID=usr._id;
    List.create(req.body)
    .then(res.render(`users/${usr._id}`, {user:usr,title:usr.name}))
  })
}
function createList(res,req){let user=req.params.id;res.render(`users/${user._id}/lists`,{title:'Add a New Flight'})}