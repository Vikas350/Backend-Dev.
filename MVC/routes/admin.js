const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
const productsController = require('../contollers/products')

const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
