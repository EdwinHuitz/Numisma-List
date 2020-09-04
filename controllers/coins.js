const User = require('../models/user');
const Coin = require('../models/coin')

module.exports = {
    new: newCoin
};

function newCoin(req, res) {
    console.log('start of newcoin function');
    console.log(req.body);
    User.findById(req.params.id, function (err, usr) {
        req.body.Author_ID = usr._id;
        const coin = new Coin(req.body);
        coin.save(function (err) {
            if (err) {
                console.log(err)
            }
            res.redirect(`/users/profile`);
            console.log('done saving coin')
        })
    })
    console.log('end of newcoin function')
}