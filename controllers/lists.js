const User = require('../models/user');
const List = require('../models/list')

module.exports = {
  new:newList,create:createList
};
function newList(res,req)
{
  console.log('start of newlist function');
  User.findById(req.params.id,function(err,usr)
  {
    req.body.Author_ID=usr;
    const list=new List(req.body);
    list.save(function(err){
        if(err)return res.render(`users/${usr._id}`, {user:usr,title:usr.name});
        console.log('done saving')
    })
  })
  console.log('end of newlist function')
}
function createList(res,req){let user=req.params.id;res.render(`users/${user}/lists`,{user:req.user?req.user:null,title:'Add a New Flight'})}