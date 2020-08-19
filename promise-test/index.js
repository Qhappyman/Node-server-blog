const fs = require('fs')
const path = require('path')

// const fullFileName = path.resolve(__dirname,'files','a.json')   //将参数拼接起来作为绝对路径,_dirname是当前文件目录
// fs.readFile(fullFileName,(err,data)=>{   //异步操作
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data.toString())  //data默认是二进制的buffer流
// })

//callback获取文件内容
function getFileContent(filename,callback){
    const fullFileName = path.resolve(__dirname, 'files', filename) //将参数拼接起来作为绝对路径,_dirname是当前文件目录
    fs.readFile(fullFileName, (err, data) => { //异步操作,回调函数
        if (err) {
            console.log(err)
            return
        }
        callback(
            JSON.parse(data.toString())
        )
    })
}
//测试
// getFileContent('a.json',data=>{         //回调地狱
//     console.log('data:',data)
//     getFileContent(data.next,bData=>{
//         console.log('bData:',bData)
//         getFileContent(bData.next,cData=>{
//             console.log('cData:',cData)
//         })
//     })
// })

//promise解决回调地狱
let read = function(filename){
    return new Promise((resolve,reject)=>{
        const fullFileName = path.resolve(__dirname, 'files', filename) //将参数拼接起来作为绝对路径,_dirname是当前文件目录
        fs.readFile(fullFileName, (err, data) => { //异步操作,回调函数
            if (err) {
                console.log(err)
                return
            }
            resolve(JSON.parse(data.toString()))
        })
    })
}

read('a.json').then(aData=>{      //read返回一个promise,调用then
    console.log('adata:',aData)
    return read(aData.next)         //再次返回一个promise,实现链式调用
}).then(bData=>{
    console.log('bdata:',bData)
    return read(bData.next)
}).then(cData=>{
    console.log(cData)
})
