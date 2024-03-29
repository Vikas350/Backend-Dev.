const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// comes under /admin/add-product - GET
router.get('/add-product', (req,res,next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{pageTitle: 'Add Product', path: '/admin/add-product'});
})

// comes under /admin/add-product - POST
router.post('/add-product', (req,res,next) => {
    // console.log(req.body); 
    products.push({title: req.body.title});
    res.redirect('/');
})

// module.exports = router;
exports.routes = router;  //we can also use this syntax
exports.products = products; // export products variable
