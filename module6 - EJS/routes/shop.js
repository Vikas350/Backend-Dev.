const express = require('express');
const path = require('path');
const rootDir = require('../util/path')

const router = express.Router();

// extract products from admin file 
const adminData = require('./admin');

router.get('/', (req,res,next) => {
    // res.send('<h1>Welcome to response through Express JS.</h1>')
    // res.sendFile('/views/shop.html') --> not work
    // console.log(adminData.products);
    const products = adminData.products; 
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('Shop', {prods: products, pageTitle: 'Shop', path: '/',hasProducts: products.length > 0, activeShop: true, productCSS: true});
})

module.exports = router;