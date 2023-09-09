const express = require('express');
const path = require('path');

const router = express.Router();

// handle requests...
router.get('/', (req,res,next) =>{
    // res.send('Route 1');
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})

router.get('/users', (req,res,next) =>{
    // res.send('Route 2');
    res.sendFile(path.join(__dirname,'..','views','users.html'));
})

module.exports = router;