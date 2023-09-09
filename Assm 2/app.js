const express = require('express');

const app = express();

//task 2
/*
app.use((req,res,next) => {
    console.log('First Middleware');
    next();
})

app.use('/', (req,res,next) => {
    console.log('Second Middleware');
    res.send('<h2>Assignment Solved !!!</h2>')
})
*/

//task 3
app.use('/users',(req,res,next) => {
    console.log('First Middleware');
    res.send('<p>middleware that handle /users only </p>')
})

app.use('/', (req,res,next) => {
    console.log('Second Middleware');
    res.send('<p>middleware that handle / only </p>')
})


app.listen(3000);