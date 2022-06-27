import https from './http.js';
	
	//设置个对象，就不用一个个暴露了，直接暴露对象
	let apiMessage = {};
	
	let baseurl='/hu/message'

    // 获取全部消息
	apiMessage.getMessageList =async function() {
		return await https.get(baseurl+'/get', null)
	}

    // 详情页
	apiMessage.updateState =async function(params) {
		return await https.get(baseurl+'/update', params)
	}
	


	//暴露出这个对象
	export default apiMessage;
