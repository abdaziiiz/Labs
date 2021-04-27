const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    const url = req.url;
    if (url === '/about') {
        res.write('<h1> Ini adalah halaman about</h1>');
    } else if (url === '/contact') {
        res.write('<h1> Ini adalah halaman contact</h1>');
    } else {
        fs.readFile("./index.html",(err, data) =>{
        if(err){
            res.writeHead(404);
            res.write('error file not found');
        }
        else{
            res.write(data);
        }
        });
    }
    res.end();
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
})