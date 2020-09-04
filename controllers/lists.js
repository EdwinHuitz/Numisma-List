const User = require('../models/user');
const List = require('../models/list');
const Coin = require('../models/coin')

module.exports = {
    new: newList,
    create: createList,
    del: deleteList,
    add: addList,
    req: reqList
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
    let coins;
    Coin.find({
        authorId: req.user._id
    }, (err, a) => {
        coins = a
    });
    List.findById(req.params.id, function (err, usrlist) {
        if (err){console.log(err);}
        res.render(`users/lists`, {
            user: req.user ? req.user : null,
            coins,
            usrlist
        })
    })
}

function deleteList(req, res) {
    List.findByIdAndDelete(req.params.id, function (err, a) {
        if (err) {
            console.log(err)
        }
        res.redirect('/users')
        console.log('done')
    })
}

function addList(req, res) {
    console.log('Starting:' + req.body)
    List.findById(req.params.id, function (err, list) {
        if (err) {
            console.log(err)
        }
        list.coinsLink.push(req.body)
        Coin.findById(req.body,function(err,t){if(err){console.log(err)}list.coinsTitle.push(t)})
        list.save()
        console.log(req.body)
        res.redirect(`/lists/${req.params.id}`)
    })
}

function reqList(req, res) {}