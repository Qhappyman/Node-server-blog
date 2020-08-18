const http = require('http')
const querystring = require('querystring')

//创建get请求
// const server = http.createServer((req,res)=>{
//     console.log('method:',req.method)   //GET，通过浏览器访问默认是get
//     const url = req.url;
//     console.log('url:',url)
//     req.query = querystring.parse(url.split('?')[1])   //将请求参数转化为正常对象键值
//     console.log('query:',req.query);
//     res.end(
//         JSON.stringify(req.query)              //返回值是请求参数对象
//     )
// })

// server.listen(8000)
// console.log(123)

//创建POST请求
// const server = http.createServer((req,res)=>{
//     if(req.method === 'POST'){
//         console.log('content-type:',req.headers['content-type'])
//         let postData = ""               //请求的数据
//         req.on('data',chunk=>{             //请求数据以流的方式接受，一点一点拼接
//             postData += chunk.toString()
//         })
//         req.on('end',()=>{
//             console.log(postData);
//             res.end('hello word')           ///这里返回，因为是异步
//         })
//     }
// })

// server.listen(8000)
// console.log('start')

//综合使用
const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    //设置返回格式
    res.setHeader('Content-type','application/json')   //不管什么数据都会被转化为JSON

    //返回数据
    const resData = {
        method,
        url,
        path,
        query
    }

    //返回
    if(method === 'GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    if(method === 'POST'){
        let postData = ""
        req.on('data',(chunk)=>{         //监听数据传输过来
            postData += chunk.toString()
        })
        req.on('end',()=>{              //监听请求结束
            console.log(postData)
            res.end('综合结果')          //返回response
        })
    }
})
server.listen(8000)
console.log('start')