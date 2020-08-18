const {add,mul} = require('./a')
const _ = require('lodash')         //lodash一般以_代替
const sum=add(10,20)
console.log(sum,mul(2,3))

const arr = _.concat([1,2],3)
console.log('arr...',arr)