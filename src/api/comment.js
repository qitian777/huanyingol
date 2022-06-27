import https from './http.js';

//设置个对象，就不用一个个暴露了，直接暴露对象
let apiComment = {};

let baseurl = '/hu'

// 获取评论列表
apiComment.getCommentList = async function (params) {
    return await https.post(baseurl + '/comment/get', params)
}

// 发布评论
apiComment.publishComment = async function (params) {
    return await https.post(baseurl + '/comment/addOrUpdate', params)
}

export default apiComment