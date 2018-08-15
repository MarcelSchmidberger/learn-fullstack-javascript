import config from './config';
import apiRouter from './api';
import fs from 'fs';

import express from 'express';
const server = express();

server.listen(config.port,() =>{
    console.info('express listening on port ', config.port)
});

server.get('/',(req, res)=>{
    res.send('Hello Express')
});

server.use(express.static('public'));
server.use('/api', apiRouter);