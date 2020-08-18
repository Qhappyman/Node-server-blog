const getList = (author,keyword) => {   //模拟数据
    //先返回假数据
    return [
        {
            id:1,
            title:'标题1',
            content:'内容1',
            createTime:158946135,
            autor:'gjq'
        },
        {
            id: 2,
            title: '标2',
            content: '内容2',
            createTime: 158946135,
            autor: 'wsc'
        },
        {
            id: 3,
            title: '标题3',
            content: '内容3',
            createTime: 158946135,
            autor: 'the shy'
        }
    ]
}
module.exports = {
    getList
}