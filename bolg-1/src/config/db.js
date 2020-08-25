const env = process.env.NODE_DEV

let MYSQL_CONF

if(env === 'dev'){
    MYSQL_CONF = {
        host: 'localhost',
            user: 'root',
            passowrd: '123456',
            port: '3306',
            database: 'users'
    }
}

if(env === 'production'){
    MYSQL_CONF = {
        host: 'localhost',
            user: 'root',
            passowrd: '123456',
            port: '3306',
            database: 'users'
    }
}

module.exports = {
    MYSQL_CONF
}