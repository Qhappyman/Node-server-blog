const {getList} = require('../controller/blog')
const { SuccessModel,ErrorModel} = require('../model/resModel')

//接口路由，在这里管理返回数据
const handleBlogRouter = (req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    //获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword ||''
        const listData = getList(author,keyword)
        return new SuccessModel(listData)
    }

    //获取博客详情
    if(method === 'GET' && path === '/api/blog/detail'){
        return{
            msg:'blog detail'
        }
    }

    //更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '更新博客'
        }
    }

    //删除博客
    if (method === 'POST' && path === '/api/blog/del') {
        return {
            msg: '删除博客'
        }
    }
}
module.exports = handleBlogRouter