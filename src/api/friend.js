import https from './http.js';

//设置个对象，就不用一个个暴露了，直接暴露对象
let apiFriend = {};

let baseurl = '/hu/friend'


// 获取好友列表
apiFriend.getFriendList =async function () {
	return await https.get(baseurl + '/get', null)
}

// 添加好友
apiFriend.addFriend =async function (param) {
	return await https.get(baseurl + '/add', param)
}

// 删除好友
apiFriend.deleteFriend =async function (param) {
	return await https.get(baseurl + '/delete', param)
}

// 搜索好友
apiFriend.searchFriend =async function (param) {
	return await https.get(baseurl + '/search', param)
}

// 确认用户
apiFriend.checkUser =async function (param) {
	return await https.get(baseurl + '/checkUser', param)
}

export default apiFriend