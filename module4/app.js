const http = require('http'); //require used to import files in node js

const routes = require('./routes');
// we cant manipulate the original file because we export it

/*
function reqListener(req,res){

}
http.createServer(reqListener);
*/

/*
http.createServer(function(req,res){

});
*/

/*
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    // const url = req.url;
    // const method = req.method;
})
*/

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);


// Notes related to package JSON File

//start is a special keyword can use directly npm
// but this is not so use npm run 

// change  the file for chack node mon working 