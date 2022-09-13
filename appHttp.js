const http = require('http');
//create app server
const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.write("<h2>Welcome to Home page ^O^</h2>");
        res.end("<br><a href='/about'>About</a>");
    }
    else if(req.url === '/about'){
        res.write("<h2>What's about us?</h2>");
        res.end("<br><a href='/'>Home</a>");
    }
    else{
        res.write("<h2>Oop! Not found</h2>");
        res.end("<br><a href='/'>Home</a>");
    }
});

server.listen(100);