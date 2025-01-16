import http from 'http';
import fs from 'fs';
import url from 'url';
import uc from 'upper-case';

// http.createServer((req, res) => {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname;
//     fs.readFile(filename, function (err, data) {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             return res.end("404 Not Found");
//         }
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

http.createServer((req, res) => {  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);