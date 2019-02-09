const Product = require('../models/product');
const User = require('../models/user');


module.exports = {
    getAdminUsers(req, res) {
        User.find().exec((err, users) => {
        if(err) console.log('Find Admin Users Error---------------', err);
        res.status(200).json({users});
       })
      }, 
};