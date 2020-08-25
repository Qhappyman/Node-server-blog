const mysql = require('mysql')

//创建连接对象
const con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    // passowrd: "",
    port:'3306',
    database:'users'
})

con.connect()

const sql ='select * from user'
con.query(sql,(err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})

con.end()