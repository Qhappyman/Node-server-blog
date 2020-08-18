const http = require('http')       //基础配置文件,真正启动服务的文件

const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)