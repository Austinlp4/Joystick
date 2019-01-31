require('dotenv').config();
const bodyParser = require("body-parser");

const session = require('express-session');
const cors = require('cors');

const adminController = require('./controllers/admin_controller');
const cloudinaryController = require('./controllers/cloudinary_controller')
const userController = require('./controllers/user_controller');
const productsController = require('./controllers/products_controller');

const mongoose = require('mongoose');
const express = require('express');

const app = express();

const PORT = 5000;

mongoose.connect(process.env.CONNECTION_STRING,
    { useNewUrlParser: true },
    (err) => {
        if(err) {
            console.log('Database Error ==>', err):
        }
        console.log('Connected to DB');
});

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));
app.use(cors());

setTimeout(() => {
    // User Endpoints

    app.get('/api/user-data', userController.readUserData);

    app.post('/api/user-data/cart', userController.addToCart);

    app.delete('/api/user-data/cart/:id', userController.removeFromCart);

    app.post('/api/login', userController.login)

    app.post('/api/logout', userController.logout)

    // Products Endpoints

    app.get('/api/products', productsController.readAllProducts);

    app.get('/api/products/:id', productsController.readProduct);
}, 200)