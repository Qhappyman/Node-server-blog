const http = require('http')       //基础配置文件,真正启动服务的文件

const PORT = 8000                       //基础端口
const serverHandle = require('../app')

const server = http.createServer(serverHandle)   //创建服务
server.listen(PORT)