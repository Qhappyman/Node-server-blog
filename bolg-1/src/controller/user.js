const login = function(username,password){
    if(username === 'zs' && password === '123')
        return true    
    else{
        return false
    }

}

module.exports = {
    login
}