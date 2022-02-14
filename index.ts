import * as http from "http";
import {IncomingMessage, ServerResponse} from "http";

const server = http.createServer()
//服务器请求
server.on('request',(request:IncomingMessage,response:ServerResponse)=>{
    console.log(request.method)
    console.log('request.method')
    console.log(request.url)
    console.log('request.url')
    console.log(request.headers)
    console.log('request.headers')

    const array = []
    //获取消息内容
    request.on('data',(chunk)=>{
        array.push(chunk)
    })
    //上传结束
    request.on('end',()=>{
        const body = Buffer.concat(array).toString();
        console.log('body',body)
        //响应请求
        response.end('响应请求')
        console.log('有人请求了')
    })
})
//监听端口
server.listen('8888')

// server.listen(8888,()=>{})
console.log('111')

