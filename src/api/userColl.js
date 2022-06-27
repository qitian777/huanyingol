import https from './http.js';

//设置个对象，就不用一个个暴露了，直接暴露对象
let apiColl = {};

let baseurl = '/hu'


// 确认是否收藏
apiColl.checkColl =async function (params) {
	return await https.post(baseurl + '/userColl/check', params)
}

// 添加收藏
apiColl.addColl =async function (params) {
	return await https.post(baseurl + '/userColl/add', params)
}

// 删除收藏
apiColl.deleteColl =async function (params) {
	return await https.post(baseurl + '/userColl/delete', params)
}

// 获取收藏列表收藏
apiColl.getCollList =async function (params) {
	return await https.post(baseurl + '/userColl/list', params)
}

export default apiColl