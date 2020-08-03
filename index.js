const http = require('http');
const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 4000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname + '/Public'));

app.use((req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1>This is middle were</h1></body></html>')
 next();
});

app.use((req,res,next)=>{
  console.log(' this is another meddle weare');
});
const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
})
