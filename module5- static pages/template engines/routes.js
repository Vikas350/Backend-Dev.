const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // we write return here so we not execute any code after res.end and return 
        // if not use use return then code after res.end() try to run and give error
    }

    if (url === '/message' && method === 'POST') {
        //work with the incoming request in chunks
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody); // this give message=<input text value>
            const message = parsedBody.split('=')[1];
            fs.writeFile('Message.text', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

        // fs.writeFileSync('Message.text', 'DUMMY Data');

    }

    //response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Page</title></head>');
    res.write('<body>Hello from my Node js Server...</body>');
    res.write('</html>');
    res.end();
}

//1. export that function 
// module.exports = requestHandler;

//2. other way to export
/*
module.exports = {
    handler: requestHandler,
    someText: 'some hard coded text'
}
*/

//3. other similar way 
/*
module.exports.handler = requestHandler;
module.exports.someText = 'some hard coded text';
*/

//4. shortcut support by node js for above method
exports.handler = requestHandler;
exports.someText = 'some hard coded text';