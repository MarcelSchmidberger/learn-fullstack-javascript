import config from './config';
import fs from 'fs';

import express from 'express';
const server = express();

server.listen(config.port,() =>{
    console.info('express listening on port ', config.port)
});

server.get('/',(req, res)=>{
    res.send('Hello Express')
});
server.get('/about.html',(req, res)=>{
    fs.readFile('./about.html',(err,data)=>{
        res.send(data.toString());
    });
});
