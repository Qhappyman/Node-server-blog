const env = process.env.NODE_DEV

let MYSQL_CONF

if(env === 'dev'){
    MYSQL_CONF = {
        host: 'localhost',
            user: 'root',
            passowrd: '1218520gjq',
            port: '3306',
            database: 'myblog'
    }
}

if(env === 'production'){
    MYSQL_CONF = {
        host: 'localhost',
            user: 'root',
            passowrd: '1218520gjq',
            port: '3306',
            database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}