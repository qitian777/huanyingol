import https from './http.js';

//设置个对象，就不用一个个暴露了，直接暴露对象
let apiUser = {};

let baseurl = '/hu'


// 登录
apiUser.login =async function (params) {
	return await https.post(baseurl + '/sysUser/login', params)
}

// 获取用户信息
apiUser.getInfo =async function () {
	return await https.get(baseurl + '/sysUser/info/get', null)
}

// 登出
apiUser.logOut = async function () {
	return await https.get(baseurl + '/sysUser/logOut', null)
}

// 检查用户名
apiUser.checkUsername =async function (params) {
	return await https.get(baseurl + '/sysUser/check/username', params)
}

// 获取邮箱验证码
apiUser.getEmailCode =async function (params) {
	return await https.post(baseurl + '/sysUser/get/emailCode', params)
}

// 修改用户信息
apiUser.updateInfo =async function (params) {
	return await https.post(baseurl + '/sysUser/info/update', params)
}

// 创建用户
apiUser.createUser =async function (params) {
	return await https.post(baseurl + '/sysUser/get/createUser', params)
}

export default apiUser