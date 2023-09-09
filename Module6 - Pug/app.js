const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//templating engine pug
app.set('view engine', 'pug'); //it has built in express support
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes); //put this in order
app.use(shopRoutes); // order does not matter if we use get and post

// if we put some dummy /any-name then the page not found will be shown 
app.use((req,res,next) => {
    // res.status(404).send('<h1>Page Not Found!!!</h1>')
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404',{pageTitle: 'Page Not Found'});
})

app.listen(3000);
