const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//use body parser 
app.use(bodyParser.urlencoded({extended: false}))
// above function take argument as callback function 
// extended false -> used to parse non default features

//this willl use her POST request
app.use('/add-product', (req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

// thsi will use here GET request
app.post('/product', (req,res,next) => {
    console.log(req.body); // give undefined initially -> because req is not parsed 
    // so for that we use bodyparser library 
    res.redirect('/'); // this will redirect the page wfter the form submit
})

app.use('/', (req,res,next) => {
    res.send('<h1>Welcome to response through Express JS.</h1>')
})


app.listen(3000);
