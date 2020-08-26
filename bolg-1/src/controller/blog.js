const {exec} = require('../db/mysql')
const getList = (author,keyword) => {   //模拟数据
    //先返回假数据，格式是正确的，但是没有匹配author，keyword
    let sql = `select * from blogs where 1=1 `
    if(author){
        sql+=`and author='${author}' `
    }
    if(keyword){
        sql+=`and title like '%${keyword}' `
    }
    sql+=`order by createtime desc;`
    console.log(sql)
    return exec(sql)
}

const getDetail = (id) =>{
    const sql =`select * from blogs where id='${id}'`
    return exec(sql).then(rows=>{
        return rows[0]
    })
}

const newBlog = (blogData = {})=>{
    const title = blogData.title;
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()
    const sql = `insert into blogs (title,content,createtime,author) values ('${title}','${content}','${createTime}','${author}')`
    return exec(sql).then(insertData=>{    //inserId为执行SQL返回的字段
        return{
            id:insertData.insertId
        }
    })
}

const updateBlog = (id,blogData={})=>{
    const title = blogData.title;
    const content = blogData.content
    const sql =`update blogs set title='${title}',content='${content}' where id=${id}`
    return exec(sql).then(updateData=>{
        if(updateData.affectedRows>0){
            return true
        }
        else{
            return false
        }
    })
    
}

const delBlog=(id,author)=>{
    const sql =`delete from blogs where id='${id}' and author='${author}' `
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