const {login} = require('../controller/user')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')

//设置cookie过期时间
const getCookieExpires = ()=>{
    const d = new Date()
    d.setTime(d.getTime()+((24*60*60*1000)))
    return d.toGMTString()
}
const handleUserRouter = (req, res) => {
        const method = req.method
        const url = req.url
        const path = url.split('?')[0]

        //登录
        if(method === 'GET' && path === '/api/user/login'){
            // const {username,password} = req.body
            const username = req.query.username
            const password = req.query.password
            const result = login(username,password)
            console.log(result)
            return result.then(data=>{
                if(data.username){
                    console.log(data)
                    //设置cookie，登录验证,ohttpOnly，防止客户端修改cookie,对外界隐藏cookie,客户端设置的cookie和服务器设置的解析不同，即使key,value在客户端都添加新的，，但是服务器仍然只能解析到自己发送是cookie
                    res.setHeader('Set-Cookie',`username=${data.username};path=/;httpOnly;expires=${getCookieExpires()}`)

                    //设置session
                    req.session.username = data.username
                    req.session.realname = data.realname
                    return new SuccessModel()
                }
                return new ErrorModel('登录失败')
            })
        }
}
module.exports = handleUserRouter
