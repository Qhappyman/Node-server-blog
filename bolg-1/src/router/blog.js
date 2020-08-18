const handleBlogRouter = (req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    //获取博客列表
    if(method === 'GET' && path === '/api/blog/detail'){
        return{
            msg:'new blog'
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