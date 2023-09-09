// const http = require('http'); 
// const routes = require('./routes');

// express js Code below
const express = require('express');

const app = express();

app.use('/', (req,res,next) => {
    console.log('This runs Everytime..!!!');
    next(); // -> use this otherwise it will not go to next middleware
})

app.use('/add-product', (req,res,next) => {
    console.log('In the Middleware...')
    // next(); //allow the request to continue to next middle ware
    res.send('<h1>Welcome to Add Product page.</h1>')
})

app.use('/', (req,res,next) => {
    console.log('In the Next Middleware...')
    //...response
    res.send('<h1>Welcome to response through Express JS.</h1>')
})


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
