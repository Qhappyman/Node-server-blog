class BaseModel{
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
class SuccessModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.erron=0
    }
}
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.erron = -1
    }
}