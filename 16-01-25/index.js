import http from 'http';
import fs from 'fs';
import url from 'url';
import uc from 'upper-case';
import event from 'events';
import * as formidable from 'formidable';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

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
//upload file using formidable module
// http.createServer(function (req, res) {
//     if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Error parsing the form');
//                 return;
//             }
//             console.log(files);
//             var file = files.filetoupload[0]; 
//             var oldpath = file.filepath || file.path;
//             var newpath = 'C:\\Users\\chauh\\OneDrive\\Desktop\\' + file.originalFilename;
//             fs.rename(oldpath, newpath, function (err) {
//                 if (err) {
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Error moving the file');
//                     return;
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.end('File uploaded and moved!');
//             });
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`
//             <form action="/fileupload" method="post" enctype="multipart/form-data">
//                 <input type="file" name="filetoupload"><br>
//                 <input type="submit">
//             </form>
//         `);
//     }
// }).listen(3000, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Server is running on port 3000');
//     }
// });
//---------------------------------------------------------
//use of nodemailer module
// if (!process.env.PASS) {
//     console.error('Error: PASS environment variable is not set.');
//     process.exit(1);
// }

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'jainilc94@gmail.com', 
//         pass: process.env.PASS
//     }
// });

// var mailOptions = {
//     from: 'jainilc94@gmail.com',
//     to: 'chauhanjainil305@gmail.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
  