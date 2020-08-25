const handleBlogRouter = require('./src/router/blog')    //引入路由
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')

//处理postData
const getPostData = (req) =>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method !== 'POST'){
            resolve({})
            return
        }
        if(req.headers['content-type'] !== 'application/json'){
            resolve({})
            return
        }
        let postData = ''
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        req.on('end',()=>{
            if(!postData){
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}
const serverHandle = (req,res)=>{
    res.setHeader('Content-type','application-json')
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    //解析 query
    req.query = querystring.parse(url.split('?')[1])

    //处理post data
    getPostData(req).then((postData)=>{
        req.body = postData

        //处理blog路由
        const blogData = handleBlogRouter(req, res)  //现在反悔的是promise
        if (blogData) {
            blogData.then(data=>{
                res.end(
                    JSON.stringify(data)
                )
            })           
            return
        }

        //处理user路由
        const userData = handleUserRouter(req, res) //内部处理数据封装在了route组件里面
        if (userData) {
            userData.then(data=>{
                res.end(
                    JSON.stringify(data)
                )
                return
            })
            
        }
        //未命中返回404
        res.writeHead(404, {
            "Content-type": "text/plain"
        })
        res.write("404 Not Found\n")
        res.end()
    })
    
}
console.log(123)
module.exports = serverHandle


//env:process.env.NODE_ENV           //标识环境