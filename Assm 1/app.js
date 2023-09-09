const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'Text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button>Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'Text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user') {
        //parse the input data 
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });

        //this below code is required for the redirection
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000);