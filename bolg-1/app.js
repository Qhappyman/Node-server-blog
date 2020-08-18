const handleBlogRouter = require('./src/router/blog')    //引入路由
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')
const serverHandle = (req,res)=>{
    res.setHeader('Content-type','application-json')
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    //解析 query
    req.query = querystring.parse(url.split('?')[0])

    //处理blog路由
    const blogData = handleBlogRouter(req,res)
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    //处理user路由
    const userData = handleUserRouter(req,res)     //内部处理数据封装在了route组件里面
    if(userData){
        res.end(
            // JSON.stringify(userData)
            JSON.stringify({   //返回的数据格式，在resModel.js里面已经封装好了
                errno:0,
                data:{},
                message:'xxx'
            })
        )
        return
    }
    //未命中返回404
    res.writeHead(404,{"Content-type":"text/plain"})
    res.write("404 Not Found\n")
    res.end()
}
console.log(123)
module.exports = serverHandle


//env:process.env.NODE_ENV           //标识环境