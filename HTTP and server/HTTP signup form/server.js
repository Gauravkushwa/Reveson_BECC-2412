const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const url = require('url');

const handleSignupForm = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const parsedData = qs.parse(body);
    const { username, password } = parsedData;

    if (username && password) {
      const user = { username, password };
      fs.appendFile('./users.txt', JSON.stringify(user) + '\n', err => {
        if (err) {
          console.error('Internal server error!', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          return res.end('Internal Server Error');
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Thank you for signing up!');
      });
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad Request: Missing username or password.');
    }
  });
};

const displayAllUsers = (res) => {
  fs.readFile('users.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      const users = data
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => JSON.parse(line))
        .map(user => user.username);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>All Users</title>
          </head>
          <body>
            <h1>All Users</h1>
            <ul>
              ${users.map(username => `<li>${username}</li>`).join('')}
            </ul>
          </body>
        </html>
      `);
    }
  });
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.url === '/signup' && req.method === 'GET') {
    const form = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Signup Form</title>
      </head>
      <body>
          <h1>Sign Up Form</h1>
          <form action="/signup" method="POST">
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter your username" required /><br/>
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter your password" required /><br/>
              <button type="submit">Submit</button>
          </form>
      </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(form);
  } else if (req.url === '/signup' && req.method === 'POST') {
    handleSignupForm(req, res);
  } else if (req.method === 'GET' && parsedUrl.pathname === '/allusers') {
    displayAllUsers(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server is listening on http://localhost:8080');
});
8