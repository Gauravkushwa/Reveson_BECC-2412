const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    if(req.url === "/route"){
        res.writeHead(200,);
        res.end('these is Home Page!')
    }

    if(req.url === "/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end('<h3>welcome to  About Page!</h3>')
    }

    if(req.url === "/contact"){
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About Us</title>
            </head>
            <body>
                <h1>About Us</h1>
                <p>Contact us at <a href="https://www.masaischool.com" target="_blank">www.masaischool.com</a></p>
            </body>
            </html>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    }

    else if (req.url === "/index") {
        fs.readFile('./server.js', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error in reading the data:', err.message);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(data);
        });
    }
    
    else{
        res.statusCode(404)
        res.end('page not found!')
    }
})

server.listen(3000, ()=>{
    console.log(`server is listing on http:localhost:3000`);
    
})