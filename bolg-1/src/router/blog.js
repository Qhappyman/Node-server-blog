const {getList,getDetail,newBlog,updateBlog, delBlog} = require('../controller/blog')
const { SuccessModel,ErrorModel} = require('../model/resModel')

//接口路由，在这里管理返回数据
const handleBlogRouter = (req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const id = req.query.id;
    //获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword ||''
        const result = getList(author,keyword)
        // return new SuccessModel(listData)
        result.then(listData=>{
            return new SuccessModel(listData)
        })
    }

    //获取博客详情
    if(method === 'GET' && path === '/api/blog/detail'){
        const id = req.query.id
        const data = getDetail(id)
        return data.then(result=>{
            return new SuccessModel(result)
        })
    }

    //新建博客
    if (method === 'POST' && path === '/api/blog/new') {
        const blogData = req.body
        const data = newBlog(blogData)
        const author = 'zhangsan'  //假数据，登录时才会有
        data.then(result=>{
            return new SuccessModel(result)
        })

    }
    //更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(id,req.body)
        console.log(result)
        return result.then(val=>{
            if (val) {
                return new SuccessModel(result)
            } else {
                return new ErrorModel('更改失败')
            }
        })
        
    }

    //删除博客
    if (method === 'POST' && path === '/api/blog/del') {
        const result = delBlog(id)
        const author = 'zhangsan'
        return result.then(val => {
            if (val) {
                return new SuccessModel(result)
            } else {
                return new ErrorModel('删除失败')
            }
        })
        
    }
}
module.exports = handleBlogRouter