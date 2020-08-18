class BaseModel{                       //处理error与success的模型
    constructor(data,message){
        if(typeof data === 'string'){  //data:object,message:string
            this.message = data
            data =null
            message=null
        }
        if(data){
            this.data = data
        }
        if(message){
            this.message = message
        }
    }
}
class SuccessModel extends BaseModel{       //返回格式:{data:...,message:...,errno:...}
    constructor(data,message){
        super(data,message)
        this.erron=0                     //成功返回errno 0
    }
}
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.erron = -1                 //失败返回errno-1
    }
}

module.exports={
    SuccessModel,
    ErrorModel
}