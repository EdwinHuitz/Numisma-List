const User = require('../models/user');
const Coin = require('../models/coin')

module.exports = {
    new: newCoin,
    req: requestCoin,
    create: createCoin,
    del: deleteCoin,
    edit: editCoin
};

function newCoin(req, res) {
    console.log('start of newcoin function');
    User.findById(req.params.id, function (err, usr) {
        req.body.authorId = usr._id;
        if (req.body.coinCountry == null) {
            req.body.coinCountry = "USA"
        }
        console.log(req.body);
        const coin = new Coin(req.body);
        coin.save(function (err) {
            if (err) {
                console.log(err)
            }
            res.redirect(`/users`);
            console.log('done saving coin')
        })
    })
    console.log('end of newcoin function')
}

function requestCoin(req, res) {
    console.log('start of requestcoin function');
    console.log(req.body);
    // User.findById(req.params.id, function (err, usr) {
    //     req.body.authorId = usr._id;
    //     const coin = new Coin(req.body);
    //     coin.save(function (err) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         res.redirect(`/users/profile`);
    //         console.log('done saving requested coin')
    //     })
    // })
    console.log('end of requestcoin function')
}

function createCoin(req, res) {
    console.log('start of coin page');
    Coin.findById(req.params.id, function (err, usrcoin) {
        if(err){console.log(err)}
        res.render(`coins/coins`, {
            user: req.user ? req.user : null,
            usrcoin
        })
    })
    console.log('end of coin page');
}

function deleteCoin(req, res) {
    Coin.findByIdAndDelete(req.params.id, function (err,a) {
        if(err){console.log(err)}
        res.redirect('/users')
        console.log('done')
    })
}
function editCoin(req,res)
{
    console.log('Starting:' + req.body)
    Coin.findById(req.params.id, function (err, coin) {
        if (err) {
            console.log(err)
        }
        req.body.authorId=coin.authorId;
        Coin.findByIdAndDelete(req.params.id,(err,a)=>{
            if(err){console.log(err)}
            req.body._id = req.params.id;
            let newCoin=new Coin(req.body)
                newCoin.save(function(err){
                if(err){console.log(err)}
                console.log(req.body)
                res.redirect(`/coins/${req.params.id}`)
            })
        });
    })
}