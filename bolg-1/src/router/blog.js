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
        const listData = getList(author,keyword)
        return new SuccessModel(listData)
    }

    //获取博客详情
    if(method === 'GET' && path === '/api/blog/detail'){
        const id = req.query.id
        const data = getDetail(id)
        return new SuccessModel(data)
    }

    //新建博客
    if (method === 'POST' && path === '/api/blog/new') {
        const blogData = req.body
        const data = newBlog(blogData)
        console.log(blogData)
        return new SuccessModel(data)

    }
    //更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(id,req.body)
        console.log(result)
        if(result){
            return new SuccessModel(result)
        }
        else{
            return new ErrorModel('更改失败')
        }
    }

    //删除博客
    if (method === 'POST' && path === '/api/blog/del') {
        const result = delBlog(id)
        if (result) {
            return new SuccessModel(result)
        } else {
            return new ErrorModel('删除失败')
        }
    }
}
module.exports = handleBlogRouter