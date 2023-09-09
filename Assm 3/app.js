const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/index');

const app = express();

//static pages
app.use(express.static(path.join(__dirname,'public')));

// handle routes...
app.use(mainRoutes);

app.listen(3000);