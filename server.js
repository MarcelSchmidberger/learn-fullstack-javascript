//import https from 'https';
import http from 'http';
// import config, {nodeEnv, logstarts} from './config';

// https.get('https://www.lynda.com', res =>{
//     console.log(res.statusCode)
//     res.on('data', chunk => {
//         console.log(chunk.toString());
//     })
// });


// console.log(config, nodeEnv)
// logstarts("Test")

const server = http.createServer((req, res) =>{
    res.write('Hello\n');
    setTimeout(() =>{
        res.write('I can stream!\n');
        res.end();
    },3000);
})

server.listen(8080)