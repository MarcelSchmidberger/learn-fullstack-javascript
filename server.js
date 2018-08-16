import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');
import serverRender from './serverRender';

server.listen(config.port, config.host,() =>{
    console.info('express listening on port ', config.port);
});

server.get('/',(req, res)=>{
    serverRender()
        .then(content =>{
            res.render('index',{
                content
            });
        })
        .catch(console.error);
   
});

server.use(express.static('public'));
server.use('/api', apiRouter);