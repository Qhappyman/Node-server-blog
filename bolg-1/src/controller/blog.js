const getList = (author,keyword) => {   //模拟数据
    //先返回假数据，格式是正确的，但是没有匹配author，keyword
    return [
        {
            id:1,
            title:'标题1',
            content:'内容1',
            createTime:158946135,
            autor:'gjq'
        },
        {
            id: 2,
            title: '标2',
            content: '内容2',
            createTime: 158946135,
            autor: 'wsc'
        },
        {
            id: 3,
            title: '标题3',
            content: '内容3',
            createTime: 158946135,
            autor: 'the shy'
        }
    ]
}

const getDetail = (id) =>{
    return{
            id: 3,
            title: '标题3',
            content: '内容3',
            createTime: 158946135,
            autor: 'the shy'
        
    }
}

const newBlog = (blogData = {})=>{
    return{
        id:3      //新建博客插入到数据表里面的id

    }
}

const updateBlog = (id,blogData={})=>{
    return true
}

const delBlog=(id)=>{
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}