import * as http from "http";
import {IncomingMessage, ServerResponse} from "http";
import * as fs from "fs";
import * as p from 'path'
const server = http.createServer()
const publicDir = p.resolve(__dirname, 'public')

//服务器请求
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    const {method, url, headers} = request
    switch (url) {
        case '/index.html':
            fs.readFile(p.resolve(publicDir, 'index.html'), (error, data) => {
                if (error) throw error;
                response.end(data.toString())
            })
    }
})
//监听端口
server.listen('8888')


