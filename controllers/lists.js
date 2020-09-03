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
        req.body.Author_ID = usr._id;
        const list = new List(req.body);
        list.save(function (err) {
            if (err) {
                console.log(err)
            }
            res.redirect(`/users/profile`);
            console.log('done saving')
        })
    })
    console.log('end of newlist function')
}

function createList(res, req) {
    let user = req.params.id;
    res.render(`users/${user}/lists`, {
        user: req.user ? req.user : null,
        title: 'Add to list'
    })
}