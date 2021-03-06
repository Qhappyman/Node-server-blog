const mysql = require('mysql')
const {MYSQL_CONF} = require('../config/db')

//创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

//建立连接
con.connect()

//统一执行sql的函数
function exec(sql){
    const promise = new Promise((resolve,reject)=>{
        con.query(sql,(err,result)=>{
            if(err){
                console.log(err)
                reject(err)
                return
            }
            console.log(result)
            resolve(result)
        })
    })
    return promise
}
// exec(`select * from blogs`)
//断开连接
// con.end()
module.exports = {
    exec
}