const Product = require('../models/product');

module.exports = {
    readAllProducts(req, res){
        Product.find({}).exec((err, products) => {
            if(err) console.log('Error===>', err);
        console.log('products', products);
        res.status(200).send(products)
        })
    }
};