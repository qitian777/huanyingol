import https from './http.js';
	
	//设置个对象，就不用一个个暴露了，直接暴露对象
	let apiItem = {};
	
	let baseurl='/nu'

    // 主页
	apiItem.getIndex =async function() {
		return await https.get(baseurl+'/items/index', null)
	}

    // 详情页
	apiItem.getDetail =async function(params) {
		return await https.get(baseurl+'/items/detail', params)
	}
	
	// 分类
	apiItem.getSortList =async function(params) {
		return await https.post(baseurl+'/items/list', params)
	}
	
    // 搜索
	apiItem.getSearchList =async function(params) {
		return await https.post(baseurl+'/items/search', params)
	}

    // 开发日志
	apiItem.getDevevLog =async function() {
		return await https.get(baseurl+'/devLog/get', null)
	}

	//暴露出这个对象
	export default apiItem;
