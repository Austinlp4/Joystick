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
