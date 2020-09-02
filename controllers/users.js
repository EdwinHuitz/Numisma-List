const User = require('../models/user');

module.exports = {
  index,
};

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('/index', { user: req.user, users, title:'Users'})
  })
}