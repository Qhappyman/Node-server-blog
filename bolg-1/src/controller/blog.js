const {exec} = require('../db/mysql')
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
    let sql = `select * from blog where 1=1`
    if(author){
        sql+=`and author = '${author}'`
    }
    if(keyword){
        sql+=`and title like '%${keyword}'`
    }
    sql+=`order by createtime desc;`
    return exec(sql)
}

const getDetail = (id) =>{
    return{
            id: 3,
            title: '标题3',
            content: '内容3',
            createTime: 158946135,
            autor: 'the shy'
        
    }
    const sql =`select * from blogs where id='&{id}'`
    return exec(sql).then(rows=>{
        return rows[0]
    })
}

const newBlog = (blogData = {})=>{
    return{
        id:3      //新建博客插入到数据表里面的id

    }
    const title = blogData.title;
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()
    const sql =`insert into blogs(title,content,createtime,author)values('${title}')`
    return exec(sql).then(insertData=>{
        return{
            id:insertData.insertId
        }
    })
}

const updateBlog = (id,blogData={})=>{
    const title = blogData.title;
    const content = blogData.content
    const sql =`update blogs set title='${title}',content='${content}'`
    return exec(sql).then(updateData=>{
        if(updateData.affectedRows>0){
            return true
        }
        else{
            return false
        }
    })
    
}

const delBlog=(id)=>{
    const sql =`delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(deleteData => {
                if (deleteData.affectedRows > 0) {
                    return true
                } else {
                    return false
                }
            }

    )
    
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}