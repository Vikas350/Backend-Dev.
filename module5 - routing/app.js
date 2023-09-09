const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes); //put this in order
app.use(shopRoutes); // order does not matter if we use get and post

// if we put some dummy /any-name then the page not found will be shown 
app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found!!!</h1>')
})

app.listen(3000);
