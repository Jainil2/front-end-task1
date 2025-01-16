import http from 'http';
import fs from 'fs';
import url from 'url';
import uc from 'upper-case';
import event from 'events';

// use of url, fs, and http modules
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
//---------------------------------------------------------
//use of npm upper-case module
// http.createServer((req, res) => {  
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(uc.upperCase("Hello World!"));
//     res.end();
// }).listen(8080);
//---------------------------------------------------------
//use of npm events module
// let eventEmitter = new event.EventEmitter();

// var myEventHandler = function () {
//     console.log('I hear a scream!');
// }

// eventEmitter.on('scream', myEventHandler);

// eventEmitter.emit('scream');
//---------------------------------------------------------