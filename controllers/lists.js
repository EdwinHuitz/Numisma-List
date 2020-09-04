const User = require('../models/user');
const List = require('../models/list')

module.exports = {
    new: newList,
    create: createList
};

function newList(req, res) {
    console.log('start of newlist function');
    console.log(req.body);
    User.findById(req.params.id, function (err, usr) {
        req.body.authorId = usr._id;
        const list = new List(req.body);
        list.save(function (err) {
            if (err) {
                console.log(err)
            }
            res.redirect(`/users`);
            console.log('done saving')
        })
    })
    console.log('end of newlist function')
}

function createList(req, res) {
    List.findById(req.params.id,function(err,usrlist){
        console.log(err);
        res.render(`users/lists`, {user: req.user ? req.user : null, usrlist})
    })
}